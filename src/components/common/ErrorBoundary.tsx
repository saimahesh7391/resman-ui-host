// src/components/common/ErrorBoundary.tsx
import React, { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}
interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return <div>Module failed to load</div>;
    return this.props.children;
  }
}

export default ErrorBoundary;
