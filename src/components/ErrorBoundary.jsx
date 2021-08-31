import React, { Fragment } from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // 更新 state 使下一次渲染能够显示降级后的 UI
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // 你同样可以将错误日志上报给服务器
    //   logErrorToMyService(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // 你可以自定义降级后的 UI 并渲染
        return (
          <Fragment>
            <h1>Something went wrong.</h1>
            <button onClick={()=>{this.setState({hasError:false})}}>back</button>
          </Fragment>
          
        )
      }
  
      return this.props.children; 
    }
}

export default ErrorBoundary