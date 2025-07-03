import React from "react";

export const Footer = () => {
  {
    /* Fun Features Footer */
  }
  return (
    <footer className="mt-12 text-center">
      <p className="text-sm text-muted-foreground mb-4">
        ✨ Pro tip: Be creative and specific with your descriptions for the best
        results!
      </p>
      <div className="flex justify-center gap-4 text-xs text-muted-foreground">
        <span>🎨 Multiple Styles</span>
        <span>⚡ AI-Powered</span>
        <span>📱 Mobile Friendly</span>
        <span>💫 Unlimited Fun</span>
      </div>
      <div>
        <p className="text-xs text-muted-foreground my-4">
          &copy; {new Date().getFullYear()} AI Sticker Studio.
          <span>
            Created with ❤️ by{" "}
            <a
              href="https://giuliani-diego.ar"
              target="_blank"
              rel="noopener noreferrer"
            >
              Diego Giuliani
            </a>{" "}
            - All rights reserved.
          </span>
        </p>
      </div>
    </footer>
  );
};
