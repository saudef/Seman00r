import {
  createElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type Props = {
  as?: "div" | "article" | "section" | "li" | "figure";
  className?: string;
  delay?: number;
  children: ReactNode;
  style?: CSSProperties;
  [key: string]: unknown;
};

/**
 * Reveals its children once they enter the viewport. Uses a CSS transition driven by a
 * data attribute, so content is never left invisible: reduced-motion users, browsers
 * without IntersectionObserver and any observer hiccup all fall back to visible.
 */
export default function Reveal({
  as = "div",
  className = "",
  delay = 0,
  children,
  style,
  ...rest
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced || !("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -6% 0px" }
    );
    observer.observe(node);
    // Safety net: never leave content hidden if the observer does not report.
    const timer = window.setTimeout(() => setShown(true), 4000);
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  return createElement(
    as,
    {
      ref,
      className: `reveal ${className}`,
      "data-revealed": shown ? "true" : "false",
      style: { ...style, transitionDelay: delay ? `${delay}s` : undefined },
      ...rest,
    },
    children
  );
}
