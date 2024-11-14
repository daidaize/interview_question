import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false , errorInfo:'' };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) { // 捕获错误
    this.setState({ hasError: true,errorInfo: errorInfo.componentStack });
  }

  render() {
    const { errorInfo } = this.state;

    if (this.state.hasError) {
      return <p><h1>哎呀报错了：</h1>{errorInfo}</p>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;