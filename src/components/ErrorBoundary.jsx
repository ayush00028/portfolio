import React, { Component } from 'react';
import { AlertTriangle, RefreshCw, Terminal } from 'lucide-react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log privately without exposing sensitive trace to the UI
    console.error("Application caught error gracefully:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-[#090d16] text-white">
          <div className="max-w-md w-full p-8 rounded-2xl bg-slate-900/90 border border-red-500/30 text-center shadow-2xl shadow-red-500/10">
            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-red-500/10 text-red-400 flex items-center justify-center border border-red-500/20">
              <AlertTriangle className="w-7 h-7" />
            </div>

            <h1 className="text-xl font-bold font-mono tracking-tight text-white mb-2">
              Runtime Safety Intercept
            </h1>

            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              An unexpected UI state occurred. The application was safely protected from data leakage.
            </p>

            <button
              onClick={this.handleReset}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white transition-colors duration-200 shadow-md shadow-cyan-600/20"
            >
              <RefreshCw className="w-4 h-4" />
              Reload Application
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
