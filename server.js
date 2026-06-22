/**
 * server.js
 * 本番サーバー（さくらインターネット AppRun / hanamii 向け）
 *
 * - dist/ の静的ファイルを配信（Vite ビルド済み）
 * - GET /api/rss → note.com の RSS をサーバーサイドでプロキシ（CORS 回避）
 */

import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT ?? 8080

/* ----------------------------------------
   RSS プロキシ
   GET /api/rss → https://note.com/masatochi/rss
   ---------------------------------------- */
const NOTE_RSS_URL = 'https://note.com/masatochi/rss'

app.get('/api/rss', async (_req, res) => {
  try {
    const upstream = await fetch(NOTE_RSS_URL, {
      headers: {
        // note.com が UA を見ている場合に備えて指定
        'User-Agent':
          'Mozilla/5.0 (compatible; kuwadate-site-rss-proxy/1.0; +https://www.kuwadate.company/)',
        Accept: 'application/rss+xml, application/xml, text/xml, */*',
      },
    })

    if (!upstream.ok) {
      res.status(502).json({ error: `Upstream error: ${upstream.status}` })
      return
    }

    const xml = await upstream.text()

    res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8')
    // 5 分間ブラウザ・CDN キャッシュを許可（頻繁に変わらない想定）
    res.setHeader('Cache-Control', 'public, max-age=300, s-maxage=300')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.send(xml)
  } catch (err) {
    console.error('[/api/rss] fetch error:', err)
    res.status(500).json({ error: 'Failed to fetch RSS' })
  }
})

/* ----------------------------------------
   静的ファイル配信（Vite ビルド済み dist/）
   ---------------------------------------- */
app.use(express.static(path.join(__dirname, 'dist')))

// SPA フォールバック：どのパスでも index.html を返す
app.get('/{*path}', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

/* ----------------------------------------
   起動
   ---------------------------------------- */
app.listen(PORT, () => {
  console.log(`[server] Listening on http://0.0.0.0:${PORT}`)
  console.log(`[server] RSS proxy: GET /api/rss → ${NOTE_RSS_URL}`)
})
