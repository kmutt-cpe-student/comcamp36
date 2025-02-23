"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { Component, ReactNode } from "react";

type ErrorBoundaryProps = {
  children: ReactNode;
};
type ErrorBoundaryState = {
  hasError: boolean;
  error?: Error;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }
  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="font-noto-sans-thai-looped bg-charcoal-1 flex h-screen w-full flex-col items-center justify-center gap-4 text-center text-white">
          <div className="size-90 relative mx-auto flex-shrink-0 overflow-hidden rounded-full border-[0.5rem] border-white">
            <Image
              src="/static/image/placeholder/main-char.png"
              alt="Profile"
              className="object-cover"
              fill
              priority
            />
          </div>
          <h2> เกิดข้อผิดพลาดบางอย่างขึ้นกับเว็ปไซต์!</h2>
          <Link href="/">
            <Button
              onClick={() => {
                setTimeout(() => {
                  window.location.reload();
                }, 1000);
              }}
            >
              กลับไปยังหน้าหลัก
            </Button>
          </Link>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
