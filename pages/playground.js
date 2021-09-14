import Head from 'next/head'
import '../ck-editor/src/scripts/editor'
const isBrowser = typeof window !== "undefined";
export default function Playground() {
  return (
    <div>
    <header className="header">
    <div className="container">
      <a className="brand " href="/">
        <span>ck</span> codekaro
      </a>
      <div className="{}" >
        <a href="https://twitter.com/akshkgd?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="false">Follow @akshkgd</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        
        
      </div>
      <div className="actions">
        
        <button title="Run" className="run">
          <img src="../images/run.svg" />
          <span></span>
        </button>
        <button title="Clear All Logs" className="clear-all">
          <img src="../images/clear-all.svg" />
          <span></span>
        </button>
        
      </div>
    </div>
  </header>
  <main className="main-container editor">
    <div className="code">
      <textarea id="jsCode" placeholder="Loading..." spellcheck="false">
console.log('Hello World!');</textarea
      >
    </div>
    <div className="preview">
      <div id="console-logs-empty" className="active">
        <div>
          <p>Hey, please click the run button to view logs here</p>
          <button title="Run" className="run-empty">Run and View logs</button>
        </div>
      </div>
      <div id="console-logs"></div>
      <iframe id="output-iframe"></iframe>
    </div>
  </main>
  <script type="module" src=""></script>
  </div>
  )
}