/* @ds-bundle: {"format":3,"namespace":"QundaMatezaDesignSystem_e01598","components":[{"name":"Eyebrow","sourcePath":"components/brand/Eyebrow.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"PriceTag","sourcePath":"components/brand/PriceTag.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"WhatsAppCTA","sourcePath":"components/core/WhatsAppCTA.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/brand/Eyebrow.jsx":"e36693b22ec6","components/brand/Logo.jsx":"90aea1c7c601","components/brand/PriceTag.jsx":"94b1b39db9cd","components/core/Badge.jsx":"3dcc79208d67","components/core/Button.jsx":"257f6f92a20b","components/core/Card.jsx":"25377857febb","components/core/WhatsAppCTA.jsx":"edc24e515ba7","components/feedback/Alert.jsx":"144b00a9fc4a","components/forms/Field.jsx":"5cbdddeb27a8","components/forms/Input.jsx":"167edb9985dd","components/forms/Select.jsx":"597ec6cd1c0c","ui_kits/website/ContactPage.jsx":"1622681f950b","ui_kits/website/HomePage.jsx":"78368644c1ac","ui_kits/website/ServicesPage.jsx":"3a11a178e22c","ui_kits/website/SiteFooter.jsx":"1c61d10bc165","ui_kits/website/SiteHeader.jsx":"359c76dc2caa","ui_kits/website/WorkPage.jsx":"e32a5af6f08e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.QundaMatezaDesignSystem_e01598 = window.QundaMatezaDesignSystem_e01598 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Eyebrow — small mono uppercase label above a heading. Amber by default. */
function Eyebrow({
  tone = 'amber',
  children,
  style,
  ...rest
}) {
  const color = tone === 'amber' ? 'var(--color-amber-dark)' : tone === 'blue' ? 'var(--color-blue)' : 'var(--color-slate)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-descriptor)',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
/** Logo — the Qunda Mateza wordmark / monogram lockups. */
function Logo({
  variant = 'primary',
  size = 40,
  descriptor = true,
  theme = 'light'
}) {
  const wordInk = theme === 'dark' ? '#F7F5F1' : 'var(--color-ink)';
  const tileBg = theme === 'dark' ? '#F7F5F1' : 'var(--color-ink)';
  const tileFg = theme === 'dark' ? 'var(--color-ink)' : '#F7F5F1';
  const Tile = ({
    s
  }) => /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: s,
      height: s,
      background: tileBg,
      color: tileFg,
      borderRadius: 'var(--radius-tile)',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: s * 0.46,
      letterSpacing: '-0.02em',
      flex: 'none'
    }
  }, "QM", /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: s * 0.13,
      right: s * 0.13,
      width: s * 0.13,
      height: s * 0.13,
      background: 'var(--color-amber)',
      borderRadius: '999px'
    }
  }));
  const Word = () => /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: size * 0.62,
      letterSpacing: '-0.02em',
      color: wordInk
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, "Qunda"), ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400
    }
  }, "Mateza")), descriptor && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: size * 0.2,
      letterSpacing: '0.08em',
      color: 'var(--color-amber-dark)',
      marginTop: size * 0.12
    }
  }, "WEB DEVELOPER & AI AUTOMATION"));
  if (variant === 'mark') return /*#__PURE__*/React.createElement(Tile, {
    s: size
  });
  if (variant === 'stacked') {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: size * 0.3
      }
    }, /*#__PURE__*/React.createElement(Tile, {
      s: size * 1.4
    }), /*#__PURE__*/React.createElement(Word, null));
  }
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: size * 0.4
    }
  }, /*#__PURE__*/React.createElement(Tile, {
    s: size * 1.4
  }), /*#__PURE__*/React.createElement(Word, null));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/PriceTag.jsx
try { (() => {
/**
 * PriceTag — Rand pricing in the mono face. Renders "From R4 500" style.
 * Numerics in Spline Sans Mono signal precision (the brand rule).
 */
function PriceTag({
  amount,
  prefix = 'From',
  period,
  currency = 'R',
  size = 'md',
  style
}) {
  const sizes = {
    sm: {
      num: '1.25rem',
      label: 'var(--text-xs)'
    },
    md: {
      num: '2rem',
      label: 'var(--text-sm)'
    },
    lg: {
      num: '2.75rem',
      label: 'var(--text-base)'
    }
  }[size];
  const formatted = typeof amount === 'number' ? amount.toLocaleString('en-ZA').replace(/,/g, ' ') : amount;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 'var(--space-2)',
      ...style
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: sizes.label,
      color: 'var(--color-slate)'
    }
  }, prefix), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 'var(--weight-medium)',
      fontSize: sizes.num,
      letterSpacing: 'var(--tracking-mono)',
      color: 'var(--color-ink)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, currency, formatted), period && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: sizes.label,
      color: 'var(--color-slate)'
    }
  }, period));
}
Object.assign(__ds_scope, { PriceTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PriceTag.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Badge — tinted pill for status/labels. Blue or amber tint with dark text. */
function Badge({
  tone = 'blue',
  children,
  style,
  ...rest
}) {
  const tones = {
    blue: {
      background: 'var(--color-blue-tint)',
      color: 'var(--color-blue)'
    },
    amber: {
      background: 'var(--color-amber-tint)',
      color: 'var(--color-amber-dark)'
    },
    ink: {
      background: 'rgba(22,38,58,0.08)',
      color: 'var(--color-ink)'
    },
    whatsapp: {
      background: 'rgba(37,211,102,0.14)',
      color: '#1A8F47'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-1)',
      padding: '4px 10px',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-mono)',
      lineHeight: 1.4,
      borderRadius: 'var(--radius-sm)',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — Qunda Mateza primary action element.
 * Primary: Signal Blue / white. Secondary: ink outline. Ghost: text only.
 */
function Button({
  variant = 'primary',
  size = 'md',
  type = 'button',
  href,
  disabled = false,
  iconLeft,
  iconRight,
  children,
  style,
  ...rest
}) {
  const pad = {
    sm: '8px 16px',
    md: '12px 24px',
    lg: '14px 28px'
  }[size];
  const fontSize = size === 'sm' ? 'var(--text-sm)' : 'var(--text-base)';
  const variants = {
    primary: {
      background: 'var(--color-blue)',
      color: 'var(--color-white)',
      border: '1px solid var(--color-blue)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--color-ink)',
      border: '1px solid var(--color-ink)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-blue)',
      border: '1px solid transparent'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    padding: pad,
    fontFamily: 'var(--font-body)',
    fontSize,
    fontWeight: 'var(--weight-medium)',
    lineHeight: 1,
    borderRadius: 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background var(--duration-base) var(--ease-standard), color var(--duration-base) var(--ease-standard)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    ...variants[variant],
    ...style
  };
  const onEnter = e => {
    if (disabled) return;
    if (variant === 'primary') e.currentTarget.style.background = 'var(--color-blue-hover)';
    if (variant === 'secondary') e.currentTarget.style.background = 'var(--color-paper)';
    if (variant === 'ghost') e.currentTarget.style.background = 'var(--color-blue-tint)';
  };
  const onLeave = e => {
    if (disabled) return;
    e.currentTarget.style.background = variants[variant].background;
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft, children, iconRight);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: base,
      onMouseEnter: onEnter,
      onMouseLeave: onLeave
    }, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: base,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Card — flat white surface with a hairline border. No drop shadow. */
function Card({
  padding = 'var(--space-6)',
  as = 'div',
  children,
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/WhatsAppCTA.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const WhatsAppGlyph = ({
  size = 20
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.02zM12.04 20.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z"
}));

/**
 * WhatsAppCTA — the single most important conversion element.
 * WhatsApp Green fill, white text, glyph on the left.
 */
function WhatsAppCTA({
  label = 'Message me on WhatsApp',
  phone,
  message,
  size = 'md',
  href,
  style,
  ...rest
}) {
  const pad = size === 'lg' ? '14px 28px' : size === 'sm' ? '8px 16px' : '12px 24px';
  const fontSize = size === 'sm' ? 'var(--text-sm)' : 'var(--text-base)';
  let link = href;
  if (!link && phone) {
    const q = message ? `?text=${encodeURIComponent(message)}` : '';
    link = `https://wa.me/${String(phone).replace(/[^0-9]/g, '')}${q}`;
  }
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    padding: pad,
    fontFamily: 'var(--font-body)',
    fontSize,
    fontWeight: 'var(--weight-medium)',
    lineHeight: 1,
    borderRadius: 'var(--radius-md)',
    background: 'var(--color-whatsapp)',
    color: 'var(--color-white)',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'background var(--duration-base) var(--ease-standard)',
    ...style
  };
  const onEnter = e => {
    e.currentTarget.style.background = 'var(--color-whatsapp-hover)';
  };
  const onLeave = e => {
    e.currentTarget.style.background = 'var(--color-whatsapp)';
  };
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(WhatsAppGlyph, {
    size: size === 'lg' ? 22 : 20
  }), label);
  if (link) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: link,
      target: "_blank",
      rel: "noopener noreferrer",
      style: base,
      onMouseEnter: onEnter,
      onMouseLeave: onLeave
    }, rest), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    style: base,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave
  }, rest), inner);
}
Object.assign(__ds_scope, { WhatsAppCTA });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/WhatsAppCTA.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Alert — calm, reassuring inline message. Never alarmist. */
function Alert({
  tone = 'info',
  title,
  children,
  style,
  ...rest
}) {
  const tones = {
    info: {
      bg: 'var(--color-blue-tint)',
      bar: 'var(--color-blue)',
      text: 'var(--color-ink)'
    },
    success: {
      bg: 'rgba(37,211,102,0.12)',
      bar: '#1A8F47',
      text: 'var(--color-ink)'
    },
    warning: {
      bg: 'var(--color-amber-tint)',
      bar: 'var(--color-amber-dark)',
      text: 'var(--color-ink)'
    }
  }[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      padding: 'var(--space-4)',
      background: tones.bg,
      borderRadius: 'var(--radius-md)',
      borderLeft: `3px solid ${tones.bar}`,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      color: tones.text
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-base)',
      marginBottom: children ? 'var(--space-1)' : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--color-slate)',
      lineHeight: 'var(--leading-small)'
    }
  }, children)));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Input — white, hairline border, 44px tall, Signal Blue focus ring. */
function Input({
  invalid = false,
  style,
  onFocus,
  onBlur,
  ...rest
}) {
  const base = {
    width: '100%',
    height: '44px',
    padding: '0 var(--space-3)',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-base)',
    color: 'var(--color-ink)',
    background: 'var(--color-white)',
    border: `1px solid ${invalid ? '#C2453B' : 'var(--border-default)'}`,
    borderRadius: 'var(--radius-sm)',
    outline: 'none',
    transition: 'box-shadow var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard)',
    boxSizing: 'border-box',
    ...style
  };
  return /*#__PURE__*/React.createElement("input", _extends({
    style: base,
    onFocus: e => {
      e.currentTarget.style.borderColor = 'var(--color-blue)';
      e.currentTarget.style.boxShadow = '0 0 0 2px var(--color-blue)';
      onFocus && onFocus(e);
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = invalid ? '#C2453B' : 'var(--border-default)';
      e.currentTarget.style.boxShadow = 'none';
      onBlur && onBlur(e);
    }
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
/** Field — label + input + helper/error, in the brand form style. */
function Field({
  label,
  htmlFor,
  helper,
  error,
  required = false,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--color-slate)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-amber-dark)'
    }
  }, " *")), children || /*#__PURE__*/React.createElement(__ds_scope.Input, {
    id: htmlFor,
    invalid: !!error
  }), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: error ? '#C2453B' : 'var(--color-slate)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Select — native select styled to match Input. */
function Select({
  invalid = false,
  children,
  style,
  onFocus,
  onBlur,
  ...rest
}) {
  const base = {
    width: '100%',
    height: '44px',
    padding: '0 var(--space-8) 0 var(--space-3)',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-base)',
    color: 'var(--color-ink)',
    background: 'var(--color-white)',
    border: `1px solid ${invalid ? '#C2453B' : 'var(--border-default)'}`,
    borderRadius: 'var(--radius-sm)',
    outline: 'none',
    appearance: 'none',
    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%235F6B78' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right var(--space-3) center',
    cursor: 'pointer',
    transition: 'box-shadow var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard)',
    boxSizing: 'border-box',
    ...style
  };
  return /*#__PURE__*/React.createElement("select", _extends({
    style: base,
    onFocus: e => {
      e.currentTarget.style.borderColor = 'var(--color-blue)';
      e.currentTarget.style.boxShadow = '0 0 0 2px var(--color-blue)';
      onFocus && onFocus(e);
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = invalid ? '#C2453B' : 'var(--border-default)';
      e.currentTarget.style.boxShadow = 'none';
      onBlur && onBlur(e);
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactPage.jsx
try { (() => {
// Qunda Mateza website — Contact page (interactive)
const {
  Button,
  WhatsAppCTA,
  Card,
  Field,
  Input,
  Select,
  Eyebrow,
  Alert
} = window.QundaMatezaDesignSystem_e01598;
const CtSection = window.HomeSection;
const {
  useState
} = React;
function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    need: 'A new website',
    detail: ''
  });
  const set = k => e => setForm(f => ({
    ...f,
    [k]: e.target.value
  }));
  return /*#__PURE__*/React.createElement(CtSection, {
    style: {
      paddingTop: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.85fr 1.15fr',
      gap: 'var(--space-16)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Get in touch"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '14px 0 16px'
    }
  }, "Let's talk about your business"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--color-slate)',
      fontSize: 'var(--text-body-lg)',
      lineHeight: 1.7
    }
  }, "WhatsApp is the fastest way to reach me \u2014 I usually reply within the hour. Prefer a form? Fill it in and I'll come back to you."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(WhatsAppCTA, {
    phone: "27730189279",
    size: "lg"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-12)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Detail, {
    k: "Phone",
    v: "+27 73 018 9279"
  }), /*#__PURE__*/React.createElement(Detail, {
    k: "Email",
    v: "hello@qundamateza.co.za"
  }), /*#__PURE__*/React.createElement(Detail, {
    k: "Based in",
    v: "Johannesburg, South Africa"
  }), /*#__PURE__*/React.createElement(Detail, {
    k: "Hours",
    v: "Mon\\u2013Fri, 08:00\\u201317:00"
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-8)"
  }, sent ? /*#__PURE__*/React.createElement(Alert, {
    tone: "success",
    title: "Thanks \\u2014 message sent"
  }, "I've got your details and I'll WhatsApp you back shortly. Talk soon!") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 4px',
      fontSize: 'var(--text-h3)'
    }
  }, "Tell me what you need"), /*#__PURE__*/React.createElement(Field, {
    label: "Your name",
    htmlFor: "cname"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "cname",
    value: form.name,
    onChange: set('name'),
    placeholder: "Thandi Khumalo",
    required: true
  })), /*#__PURE__*/React.createElement(Field, {
    label: "WhatsApp number",
    htmlFor: "cphone",
    helper: "So I can reply where it suits you"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "cphone",
    type: "tel",
    value: form.phone,
    onChange: set('phone'),
    placeholder: "+27 73 018 9279",
    required: true
  })), /*#__PURE__*/React.createElement(Field, {
    label: "What can I help with?",
    htmlFor: "cneed"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "cneed",
    value: form.need,
    onChange: set('need')
  }, /*#__PURE__*/React.createElement("option", null, "A new website"), /*#__PURE__*/React.createElement("option", null, "Smart automation"), /*#__PURE__*/React.createElement("option", null, "Both"), /*#__PURE__*/React.createElement("option", null, "Something else"))), /*#__PURE__*/React.createElement(Field, {
    label: "A little about your business",
    htmlFor: "cdetail"
  }, /*#__PURE__*/React.createElement("textarea", {
    id: "cdetail",
    value: form.detail,
    onChange: set('detail'),
    rows: 4,
    placeholder: "What do you do, and what's the goal?",
    style: {
      width: '100%',
      padding: 'var(--space-3)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--color-ink)',
      background: 'var(--color-white)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      resize: 'vertical',
      boxSizing: 'border-box',
      lineHeight: 1.5
    }
  })), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    style: {
      width: '100%'
    }
  }, "Send message"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--color-slate)',
      textAlign: 'center',
      margin: 0
    }
  }, "No spam, ever. Just a real reply from a real person.")))));
}
function Detail({
  k,
  v
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--color-slate)',
      width: 72,
      flex: 'none'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-base)',
      color: 'var(--color-ink)',
      letterSpacing: '0.02em'
    }
  }, v));
}
window.ContactPage = ContactPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomePage.jsx
try { (() => {
// Qunda Mateza website — Home page
const {
  Button,
  WhatsAppCTA,
  Card,
  Badge,
  Eyebrow,
  PriceTag
} = window.QundaMatezaDesignSystem_e01598;
function PhotoSlot({
  label,
  height = 360,
  rounded = 'var(--radius-lg)'
}) {
  // Honest placeholder for a real photo (brand: real over stock).
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      borderRadius: rounded,
      background: 'var(--color-ink)',
      backgroundImage: 'linear-gradient(135deg, #16263A 0%, #1d3550 100%)',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 'var(--space-4)',
      overflow: 'hidden',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      letterSpacing: '0.04em',
      color: 'rgba(247,245,241,0.55)'
    }
  }, "\u20DD ", label));
}
function Section({
  children,
  bg = 'transparent',
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      padding: '72px 24px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-width)',
      margin: '0 auto'
    }
  }, children));
}
function HomePage({
  onNav
}) {
  const services = [{
    t: 'A website that works on every phone',
    d: 'Clean, fast and easy to update. Built to grow with you — not to impress other developers.',
    tag: 'Websites'
  }, {
    t: 'A smart assistant for the boring jobs',
    d: 'Answers common questions, books appointments and follows up — so only the real enquiries reach your phone.',
    tag: 'AI automation'
  }, {
    t: 'Only the real enquiries reach you',
    d: 'Quote forms and WhatsApp flows that filter time-wasters and send qualified leads straight to you.',
    tag: 'Lead capture'
  }];
  const plans = [{
    name: 'Starter site',
    price: 4500,
    blurb: 'A clean one-page site, live in a week.',
    items: ['Up to 5 sections', 'Works on every phone', 'WhatsApp button', 'You can edit the text']
  }, {
    name: 'Business site',
    price: 9500,
    blurb: 'A full site for a growing business.',
    items: ['Up to 8 pages', 'Contact & quote forms', 'Google listing setup', 'Basic analytics'],
    featured: true
  }, {
    name: 'Smart automation',
    price: 6500,
    blurb: 'Add an assistant that handles enquiries.',
    items: ['WhatsApp auto-replies', 'Lead qualifying', 'Booking calendar', 'Monthly check-in']
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 64,
      paddingBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 'var(--space-12)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Web developer & AI automation"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-display)',
      lineHeight: 'var(--leading-display)',
      letterSpacing: '-0.02em',
      margin: '16px 0 0'
    }
  }, "Modern websites, done properly and explained plainly."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-lg)',
      color: 'var(--color-slate)',
      lineHeight: 1.6,
      margin: '20px 0 0',
      maxWidth: 480
    }
  }, "I build websites and smart automation for South African small businesses \u2014 the kind that bring in real enquiries and keep working long after launch."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-8)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(WhatsAppCTA, {
    phone: "27730189279",
    size: "lg"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav('work')
  }, "See my work")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-8)',
      marginTop: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    n: "40+",
    l: "Local sites built"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: "7 days",
    l: "Typical turnaround"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: "R4 500",
    l: "Starting from"
  }))), /*#__PURE__*/React.createElement(PhotoSlot, {
    label: "Photo \u2014 a real local shop owner at the counter",
    height: 420
  }))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--color-white)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "blue"
  }, "What I do"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '12px 0 0'
    }
  }, "Technology, translated into outcomes you can see"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--color-slate)',
      fontSize: 'var(--text-body-lg)',
      lineHeight: 1.6,
      marginTop: 'var(--space-3)'
    }
  }, "No jargon. Just the job each thing does for your business.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-12)'
    }
  }, services.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.t
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "blue"
  }, s.tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '14px 0 8px',
      fontSize: 'var(--text-h3)'
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--color-slate)',
      fontSize: 'var(--text-base)',
      lineHeight: 1.6,
      margin: 0
    }
  }, s.d))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Plain pricing"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '12px 0 0'
    }
  }, "Rand prices, no surprises"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--color-slate)',
      fontSize: 'var(--text-body-lg)',
      lineHeight: 1.6,
      marginTop: 'var(--space-3)'
    }
  }, "Every project is quoted up front. These are honest starting points.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-12)'
    }
  }, plans.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    style: p.featured ? {
      borderColor: 'var(--color-blue)',
      borderWidth: 2
    } : undefined
  }, p.featured && /*#__PURE__*/React.createElement(Badge, {
    tone: "amber"
  }, "Most popular"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: p.featured ? '14px 0 4px' : '0 0 4px'
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--color-slate)',
      fontSize: 'var(--text-sm)',
      margin: '0 0 16px'
    }
  }, p.blurb), /*#__PURE__*/React.createElement(PriceTag, {
    amount: p.price
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '20px 0 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, p.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      fontSize: 'var(--text-sm)',
      color: 'var(--color-ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-blue)'
    }
  }, "\u2713"), " ", i))), /*#__PURE__*/React.createElement(Button, {
    variant: p.featured ? 'primary' : 'secondary',
    onClick: () => onNav('contact'),
    style: {
      width: '100%'
    }
  }, "Get a quote"))))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--color-white)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 'var(--space-12)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    label: "Photo \u2014 your friendly developer",
    height: 300
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "blue"
  }, "Why work with me"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '12px 0 16px'
    }
  }, "You'll always know what's happening, and why"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--color-slate)',
      fontSize: 'var(--text-body-lg)',
      lineHeight: 1.7
    }
  }, "I explain things the way I'd explain them to a friend who isn't technical. No surprises, no disappearing acts \u2014 just steady, reliable work and a real person on the other end of WhatsApp."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(WhatsAppCTA, {
    phone: "27730189279"
  }))))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--color-ink)",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: 'var(--color-paper)',
      fontSize: 'var(--text-h1)',
      maxWidth: 640,
      margin: '0 auto'
    }
  }, "Let's get your business online, properly."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(247,245,241,0.7)',
      fontSize: 'var(--text-body-lg)',
      margin: '16px auto 32px',
      maxWidth: 520
    }
  }, "Tell me what you do \u2014 I'll tell you exactly how I'd help and what it costs."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(WhatsAppCTA, {
    phone: "27730189279",
    size: "lg"
  }))));
}
function Stat({
  n,
  l
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 'var(--text-h2)',
      color: 'var(--color-ink)',
      letterSpacing: '0.01em'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--color-slate)',
      marginTop: 4
    }
  }, l));
}
window.HomePage = HomePage;
window.HomeSection = Section;
window.HomePhotoSlot = PhotoSlot;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesPage.jsx
try { (() => {
// Qunda Mateza website — Services detail page
const {
  Button,
  WhatsAppCTA,
  Card,
  Badge,
  Eyebrow,
  PriceTag
} = window.QundaMatezaDesignSystem_e01598;
const SvcSection = window.HomeSection;
function ServicesPage({
  onNav
}) {
  const blocks = [{
    tag: 'Websites',
    title: 'A website that works on every phone',
    body: 'Most of your customers will find you on their phone. I build sites that load fast, read clearly and make it easy to get in touch — then I show you how to keep the text up to date yourself.',
    points: ['Mobile-first, loads in under 2 seconds', 'WhatsApp button on every page', 'Easy to edit — no developer needed', 'Set up to be found on Google']
  }, {
    tag: 'AI automation',
    title: 'A smart assistant that handles the boring jobs',
    body: 'Repetitive questions, bookings and follow-ups eat your day. I set up an assistant that handles them on WhatsApp, so you only step in when it actually matters.',
    points: ['Answers your common questions, day and night', 'Books appointments into your calendar', 'Follows up so leads don\u2019t go cold', 'Hands over to you for anything tricky']
  }, {
    tag: 'Lead capture',
    title: 'Only the real enquiries reach your phone',
    body: 'Time-wasters are exhausting. Quote forms and smart WhatsApp flows ask the right questions up front, so the leads that reach you are ready to talk.',
    points: ['Quote forms that ask the right things', 'Qualified leads sent straight to WhatsApp', 'No more answering the same question twice', 'A simple record of every enquiry']
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SvcSection, {
    style: {
      paddingTop: 64,
      paddingBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 680
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Services"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '14px 0 0'
    }
  }, "Everything you need to get online and stay there"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-lg)',
      color: 'var(--color-slate)',
      lineHeight: 1.6,
      marginTop: 'var(--space-4)'
    }
  }, "Pick one, or let me put them together. Every project starts with a plain-language chat on WhatsApp \u2014 no obligation."))), blocks.map((b, i) => /*#__PURE__*/React.createElement(SvcSection, {
    key: b.tag,
    bg: i % 2 === 0 ? 'var(--color-white)' : 'transparent'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
      gap: 'var(--space-12)',
      alignItems: 'center',
      direction: i % 2 === 0 ? 'ltr' : 'rtl'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      direction: 'ltr'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: i === 1 ? 'amber' : 'blue'
  }, b.tag), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 12px'
    }
  }, b.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--color-slate)',
      fontSize: 'var(--text-body-lg)',
      lineHeight: 1.7
    }
  }, b.body), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '24px 0 0',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-3)'
    }
  }, b.points.map(p => /*#__PURE__*/React.createElement("li", {
    key: p,
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      fontSize: 'var(--text-base)',
      color: 'var(--color-ink)',
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-blue)',
      flex: 'none'
    }
  }, "\u2713"), " ", p)))), /*#__PURE__*/React.createElement("div", {
    style: {
      direction: 'ltr'
    }
  }, window.HomePhotoSlot({
    label: `Photo / screenshot — ${b.tag.toLowerCase()} in action`,
    height: 320
  }))))), /*#__PURE__*/React.createElement(SvcSection, {
    bg: "var(--color-ink)",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: 'var(--color-paper)',
      maxWidth: 560,
      margin: '0 auto 16px'
    }
  }, "Not sure which one you need?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(247,245,241,0.7)',
      fontSize: 'var(--text-body-lg)',
      margin: '0 auto 32px',
      maxWidth: 480
    }
  }, "Tell me about your business and I'll point you the right way \u2014 honestly."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(WhatsAppCTA, {
    phone: "27730189279",
    size: "lg"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav('contact'),
    style: {
      color: 'var(--color-paper)',
      borderColor: 'rgba(247,245,241,0.4)'
    }
  }, "Send a message"))));
}
window.ServicesPage = ServicesPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteFooter.jsx
try { (() => {
// Qunda Mateza website — shared footer
const {
  Logo
} = window.QundaMatezaDesignSystem_e01598;
function SiteFooter({
  onNav
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--color-ink)',
      color: 'var(--color-paper)',
      padding: '48px 24px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-width)',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "primary",
    size: 22,
    theme: "dark"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(247,245,241,0.7)',
      fontSize: 'var(--text-sm)',
      lineHeight: 1.6,
      marginTop: 'var(--space-4)'
    }
  }, "Modern websites and smart automation for South African small businesses. Done properly, explained plainly, built to last.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-16)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--color-amber)',
      marginBottom: 'var(--space-4)'
    }
  }, "Pages"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, ['Home', 'Services', 'Work', 'Contact'].map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => onNav(l.toLowerCase()),
    style: {
      border: 'none',
      background: 'none',
      textAlign: 'left',
      cursor: 'pointer',
      color: 'rgba(247,245,241,0.7)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      padding: 0
    }
  }, l)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--color-amber)',
      marginBottom: 'var(--space-4)'
    }
  }, "Get in touch"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      color: 'rgba(247,245,241,0.85)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "+27 73 018 9279"), /*#__PURE__*/React.createElement("span", null, "hello@qundamateza.co.za"), /*#__PURE__*/React.createElement("span", null, "Johannesburg, South Africa"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-width)',
      margin: '32px auto 0',
      paddingTop: 'var(--space-6)',
      borderTop: '1px solid rgba(247,245,241,0.12)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'rgba(247,245,241,0.5)',
      letterSpacing: '0.02em'
    }
  }, "\xA9 2026 Qunda Mateza \xB7 Built to last"));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHeader.jsx
try { (() => {
// Qunda Mateza website — shared header
const {
  Logo,
  Button,
  WhatsAppCTA
} = window.QundaMatezaDesignSystem_e01598;
function SiteHeader({
  current,
  onNav
}) {
  const links = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'services',
    label: 'Services'
  }, {
    id: 'work',
    label: 'Work'
  }, {
    id: 'contact',
    label: 'Contact'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 24px',
      borderBottom: '1px solid var(--color-border)',
      background: 'rgba(247,245,241,0.85)',
      backdropFilter: 'blur(8px)',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('home'),
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "primary",
    size: 22,
    descriptor: false
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.id,
    onClick: () => onNav(l.id),
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      fontWeight: current === l.id ? 'var(--weight-medium)' : 'var(--weight-regular)',
      color: current === l.id ? 'var(--color-ink)' : 'var(--color-slate)',
      padding: '4px 0',
      borderBottom: current === l.id ? '2px solid var(--color-amber)' : '2px solid transparent'
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(WhatsAppCTA, {
    phone: "27730189279",
    size: "sm",
    label: "WhatsApp"
  })));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WorkPage.jsx
try { (() => {
// Qunda Mateza website — Work / portfolio page
const {
  Button,
  WhatsAppCTA,
  Card,
  Badge,
  Eyebrow
} = window.QundaMatezaDesignSystem_e01598;
const WkSection = window.HomeSection;
function WorkPage({
  onNav
}) {
  const projects = [{
    name: 'Mama\u2019s Kitchen',
    type: 'Restaurant website',
    result: 'Online orders up 3\u00d7 in two months',
    tag: 'Website'
  }, {
    name: 'Cape Auto Repairs',
    type: 'Booking + WhatsApp assistant',
    result: 'Bookings handled while they work',
    tag: 'Automation'
  }, {
    name: 'Bright Sparks Electrical',
    type: 'Lead-capture website',
    result: 'Only real quote requests get through',
    tag: 'Lead capture'
  }, {
    name: 'Thandi\u2019s Hair Studio',
    type: 'One-page site + bookings',
    result: 'Fully booked weekends, no phone tag',
    tag: 'Website'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(WkSection, {
    style: {
      paddingTop: 64,
      paddingBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 680
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Recent work"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '14px 0 0'
    }
  }, "Real businesses, real results"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-lg)',
      color: 'var(--color-slate)',
      lineHeight: 1.6,
      marginTop: 'var(--space-4)'
    }
  }, "A few local businesses I've helped get online and bring in more of the right enquiries."))), /*#__PURE__*/React.createElement(WkSection, {
    bg: "var(--color-white)",
    style: {
      paddingTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-6)'
    }
  }, projects.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    padding: "0",
    style: {
      overflow: 'hidden'
    }
  }, window.HomePhotoSlot({
    label: `Screenshot \u2014 ${p.name}`,
    height: 200,
    rounded: '0'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "blue"
  }, p.tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '12px 0 4px'
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--color-slate)',
      fontSize: 'var(--text-sm)',
      margin: '0 0 12px'
    }
  }, p.type), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--color-ink)',
      margin: 0,
      fontWeight: 500
    }
  }, p.result)))))), /*#__PURE__*/React.createElement(WkSection, {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      maxWidth: 520,
      margin: '0 auto 16px'
    }
  }, "Your business could be next"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--color-slate)',
      fontSize: 'var(--text-body-lg)',
      margin: '0 auto 32px',
      maxWidth: 460
    }
  }, "Let's have a quick, plain-language chat about what would work for you."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(WhatsAppCTA, {
    phone: "27730189279",
    size: "lg"
  }))));
}
window.WorkPage = WorkPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WorkPage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.PriceTag = __ds_scope.PriceTag;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.WhatsAppCTA = __ds_scope.WhatsAppCTA;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
