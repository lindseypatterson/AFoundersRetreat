/* @ds-bundle: {"format":4,"namespace":"TheFoundersEditDesignSystem_0cfd4a","components":[{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"BlogCard","sourcePath":"components/content/BlogCard.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"Stat","sourcePath":"components/content/Stat.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Button","sourcePath":"components/primitives/Button.jsx"},{"name":"Divider","sourcePath":"components/primitives/Divider.jsx"},{"name":"Eyebrow","sourcePath":"components/primitives/Eyebrow.jsx"},{"name":"Ribbon","sourcePath":"components/primitives/Ribbon.jsx"},{"name":"Tag","sourcePath":"components/primitives/Tag.jsx"}],"sourceHashes":{"components/content/Accordion.jsx":"1bc067df4626","components/content/BlogCard.jsx":"af9c377a32ef","components/content/Card.jsx":"3a0ef2485ed3","components/content/SectionHeading.jsx":"d599985dae6e","components/content/Stat.jsx":"ed891a0569c6","components/forms/Checkbox.jsx":"3af65f853ed2","components/forms/Input.jsx":"dad57ef36f87","components/forms/Select.jsx":"de37a2cc658b","components/navigation/Footer.jsx":"a663dc544a79","components/navigation/NavBar.jsx":"02dfc5f75c2e","components/primitives/Button.jsx":"03a0ad6c9d01","components/primitives/Divider.jsx":"f12aa9c09e18","components/primitives/Eyebrow.jsx":"f6525dce509a","components/primitives/Ribbon.jsx":"98a3d2ecd4f3","components/primitives/Tag.jsx":"42ec2dc8cf22","kit-home.jsx":"741a3ea28db1","site/kit-home.jsx":"f9b737d52008","ui_kits/website/kit-home.jsx":"ff52053f415e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TheFoundersEditDesignSystem_0cfd4a = window.TheFoundersEditDesignSystem_0cfd4a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Accordion — FAQ disclosure list with editorial ink rules. Uncontrolled;
 * one panel open at a time by default (set `multi` to allow several).
 */
function Accordion({
  items = [],
  defaultOpen = 0,
  multi = false,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(() => multi ? defaultOpen != null ? [defaultOpen] : [] : defaultOpen);
  const isOpen = i => multi ? open.includes(i) : open === i;
  const toggle = i => {
    if (multi) setOpen(o => o.includes(i) ? o.filter(x => x !== i) : [...o, i]);else setOpen(o => o === i ? -1 : i);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderTop: '1.5px solid var(--border-strong)',
      ...style
    }
  }, rest), items.map((it, i) => {
    const openState = isOpen(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: '1px solid var(--border-muted)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => toggle(i),
      "aria-expanded": openState,
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px',
        padding: '22px 0',
        background: 'transparent',
        border: 0,
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: 'var(--fs-h4)',
        color: openState ? 'var(--terracotta)' : 'var(--ink)',
        transition: 'color var(--dur-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("span", null, it.q), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": true,
      style: {
        flexShrink: 0,
        fontFamily: 'var(--font-sans)',
        fontSize: '22px',
        fontWeight: 300,
        lineHeight: 1,
        transform: openState ? 'rotate(45deg)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out)',
        color: 'var(--ink)'
      }
    }, "+")), /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden',
        maxHeight: openState ? '340px' : '0',
        transition: 'max-height var(--dur-slow) var(--ease-in-out)'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        padding: '0 0 24px',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--fs-body)',
        lineHeight: 'var(--lh-body)',
        color: 'var(--ink-2)',
        maxWidth: '62ch'
      }
    }, it.a)));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/content/BlogCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * BlogCard — compact horizontal post row: small square thumbnail, title,
 * one-line teaser, uppercase read-more + date. Matches the "Check-In Time: The
 * Blog" list from the brand.
 */
function BlogCard({
  image,
  imageAlt = '',
  title,
  excerpt,
  date,
  href,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href || undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'grid',
      gridTemplateColumns: '96px 1fr',
      gap: '18px',
      alignItems: 'center',
      textDecoration: 'none',
      color: 'inherit',
      padding: '16px 0',
      borderBottom: '1px solid var(--border-muted)',
      ...style
    }
  }, rest), image && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '96px',
      height: '84px',
      overflow: 'hidden',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-muted)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      filter: 'saturate(0.92)',
      transform: hover ? 'scale(1.06)' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--fs-h4)',
      lineHeight: 'var(--lh-heading)',
      color: 'var(--ink)'
    }
  }, title), excerpt && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '5px 0 0',
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      color: 'var(--ink-2)',
      lineHeight: 1.5
    }
  }, excerpt), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '9px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      fontFamily: 'var(--font-sans)',
      fontSize: '11px',
      letterSpacing: '0.14em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink)',
      display: 'inline-flex',
      gap: '6px',
      alignItems: 'center'
    }
  }, "Read more ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      transform: hover ? 'translateX(3px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }, "\u2192")), date && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-3)'
    }
  }, date))));
}
Object.assign(__ds_scope, { BlogCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/BlogCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Stat — oversized Bodoni figure with an uppercase caption. Used in row groups
 * to convey retreat facts (days, women, cities).
 */
function Stat({
  value,
  label,
  tone = 'ink',
  align = 'left',
  style,
  ...rest
}) {
  const tones = {
    ink: 'var(--ink)',
    terracotta: 'var(--terracotta)',
    teal: 'var(--teal-deep)',
    olive: 'var(--olive-deep)',
    paper: 'var(--paper-2)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--fs-display-md)',
      lineHeight: 1,
      letterSpacing: 'var(--ls-tight)',
      color: tones[tone] || tones.ink
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '10px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: '12px',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: tone === 'paper' ? 'rgba(251,245,233,.75)' : 'var(--ink-3)'
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Stat.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checkbox — square editorial check with terracotta fill when selected.
 * Uncontrolled unless `checked` + `onChange` are supplied.
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  name,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isChecked = checked != null ? checked : internal;
  const handle = e => {
    if (checked == null) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: '12px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      flexShrink: 0,
      width: '20px',
      height: '20px',
      marginTop: '1px',
      border: `1.5px solid ${isChecked ? 'var(--terracotta)' : 'var(--ink-3)'}`,
      background: isChecked ? 'var(--terracotta)' : 'transparent',
      borderRadius: 'var(--radius-xs)',
      transition: 'all var(--dur-base) var(--ease-out)'
    }
  }, isChecked && /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 16 16",
    width: "14",
    height: "14",
    style: {
      position: 'absolute',
      top: '2px',
      left: '2px'
    },
    "aria-hidden": true
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 8.5l3 3 7-7.5",
    fill: "none",
    stroke: "var(--ink)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    name: name,
    checked: isChecked,
    disabled: disabled,
    onChange: handle,
    style: {
      position: 'absolute',
      opacity: 0,
      inset: 0,
      margin: 0,
      cursor: 'inherit'
    }
  }, rest))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      lineHeight: 1.45,
      color: 'var(--ink)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — text field with a floating uppercase label. Underline style by
 * default (editorial forms), or `box` for a bordered field.
 */
function Input({
  label,
  type = 'text',
  value,
  defaultValue,
  placeholder,
  name,
  variant = 'underline',
  hint,
  error,
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--teal-deep)' : 'var(--border)';
  const box = variant === 'box';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: '11px',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-2)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    name: name,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: 'var(--ink)',
      background: box ? 'var(--paper-3)' : 'transparent',
      border: box ? `1px solid ${borderColor}` : 'none',
      borderBottom: `1.5px solid ${borderColor}`,
      borderRadius: box ? 'var(--radius-sm)' : 0,
      padding: box ? '13px 15px' : '10px 2px',
      outline: 'none',
      transition: 'border-color var(--dur-base) var(--ease-out)',
      opacity: disabled ? 0.5 : 1,
      width: '100%',
      boxSizing: 'border-box'
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      color: error ? 'var(--danger)' : 'var(--ink-3)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — styled native dropdown matching Input's editorial forms.
 */
function Select({
  label,
  options = [],
  value,
  defaultValue,
  name,
  variant = 'underline',
  hint,
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const box = variant === 'box';
  const borderColor = focus ? 'var(--teal-deep)' : 'var(--border)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: '11px',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-2)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    name: name,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: 'var(--ink)',
      background: box ? 'var(--paper-3)' : 'transparent',
      border: box ? `1px solid ${borderColor}` : 'none',
      borderBottom: `1.5px solid ${borderColor}`,
      borderRadius: box ? 'var(--radius-sm)' : 0,
      padding: box ? '13px 40px 13px 15px' : '10px 26px 10px 2px',
      outline: 'none',
      transition: 'border-color var(--dur-base) var(--ease-out)',
      opacity: disabled ? 0.5 : 1
    }
  }, rest), options.map((o, i) => {
    const val = typeof o === 'string' ? o : o.value;
    const lbl = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: i,
      value: val
    }, lbl);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      right: box ? '15px' : '2px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--teal-deep)',
      fontSize: '11px'
    }
  }, "\u25BC")), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      color: 'var(--ink-3)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Footer — dark teal editorial footer: oversized script wordmark, link columns,
 * a small newsletter line, and a bottom legal rule.
 */
function Footer({
  brand = 'Founders Retreat',
  tagline = 'A collaborative weekend for women building businesses.',
  columns = [],
  note = '\u00A9 Founders Retreat \u00b7 October 2\u20135, 2026 \u00b7 By invitation only.',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: 'var(--teal-deep)',
      color: 'var(--paper-2)',
      padding: '72px 40px 32px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(auto-fit, minmax(120px, 1fr))',
      gap: '48px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: '46px',
      lineHeight: 1
    }
  }, brand), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0 0',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'var(--fs-h4)',
      color: 'rgba(251,245,233,.82)',
      maxWidth: '30ch'
    }
  }, tagline)), columns.map((col, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: '11px',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--terracotta-soft)',
      marginBottom: '18px'
    }
  }, col.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '11px'
    }
  }, col.links.map((l, j) => /*#__PURE__*/React.createElement("li", {
    key: j
  }, /*#__PURE__*/React.createElement("a", {
    href: typeof l === 'string' ? '#' : l.href || '#',
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      color: 'rgba(251,245,233,.86)',
      textDecoration: 'none'
    }
  }, typeof l === 'string' ? l : l.label))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '52px auto 0',
      paddingTop: '22px',
      borderTop: '1px solid rgba(251,245,233,.22)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      letterSpacing: '0.08em',
      color: 'rgba(251,245,233,.6)'
    }
  }, /*#__PURE__*/React.createElement("span", null, note), /*#__PURE__*/React.createElement("span", {
    style: {
      letterSpacing: '0.2em',
      textTransform: 'uppercase'
    }
  }, "Instagram \xB7 Journal \xB7 Contact")));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NavBar — editorial bordered top nav. Centered script wordmark with a boxed,
 * divider-separated link row beneath (the "Late Checkout" masthead pattern).
 * `layout='inline'` puts the wordmark left and links right instead.
 */
function NavBar({
  brand = 'Founders Retreat',
  links = ['Home', 'About', 'Retreats', 'Journal', 'Contact'],
  active,
  cta,
  layout = 'stacked',
  onNavigate,
  style,
  ...rest
}) {
  const wordmark = /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: layout === 'stacked' ? '38px' : '30px',
      lineHeight: 1,
      color: 'var(--ink)',
      whiteSpace: 'nowrap'
    }
  }, brand);
  const linkStyle = isActive => ({
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: '11px',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: isActive ? 'var(--terracotta)' : 'var(--ink)',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'color var(--dur-base) var(--ease-out)',
    whiteSpace: 'nowrap'
  });
  const linkRow = /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      border: layout === 'stacked' ? '1px solid var(--ink)' : 'none'
    }
  }, links.map((l, i) => {
    const label = typeof l === 'string' ? l : l.label;
    const isActive = active ? active === label : i === 0;
    return /*#__PURE__*/React.createElement("a", {
      key: i,
      href: typeof l === 'string' ? '#' : l.href || '#',
      onClick: e => {
        if (onNavigate) {
          e.preventDefault();
          onNavigate(label);
        }
      },
      style: {
        ...linkStyle(isActive),
        padding: layout === 'stacked' ? '13px 26px' : '8px 0',
        marginLeft: layout === 'inline' ? i ? '30px' : 0 : 0,
        borderRight: layout === 'stacked' && i < links.length - 1 ? '1px solid var(--ink)' : 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      onMouseEnter: e => e.currentTarget.style.color = 'var(--terracotta)',
      onMouseLeave: e => e.currentTarget.style.color = isActive ? 'var(--terracotta)' : 'var(--ink)'
    }, label);
  }));
  if (layout === 'inline') {
    return /*#__PURE__*/React.createElement("header", _extends({
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '24px',
        padding: '20px 40px',
        background: 'var(--paper)',
        borderBottom: '1px solid var(--border)',
        ...style
      }
    }, rest), wordmark, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '30px'
      }
    }, linkRow, cta));
  }
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px',
      padding: '22px 40px 18px',
      background: 'var(--paper)',
      borderBottom: '1px solid var(--border)',
      ...style
    }
  }, rest), wordmark, linkRow);
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/primitives/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — The Founders' Edit primary action control.
 * Editorial pill with letterspaced uppercase label; terracotta is the signal color.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  arrow = false,
  fullWidth = false,
  disabled = false,
  as = 'button',
  href,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const sizes = {
    sm: {
      padding: '9px 20px',
      fontSize: '11px',
      letterSpacing: '0.2em'
    },
    md: {
      padding: '13px 30px',
      fontSize: '12px',
      letterSpacing: '0.2em'
    },
    lg: {
      padding: '17px 42px',
      fontSize: '13px',
      letterSpacing: '0.22em'
    }
  };
  const palettes = {
    primary: {
      base: {
        background: 'var(--ink)',
        color: 'var(--paper-2)',
        border: '1.5px solid var(--ink)'
      },
      hover: {
        background: '#000',
        borderColor: '#000'
      }
    },
    secondary: {
      base: {
        background: 'transparent',
        color: 'var(--ink)',
        border: '1.5px solid var(--ink)'
      },
      hover: {
        background: 'var(--ink)',
        color: 'var(--paper-2)'
      }
    },
    ghost: {
      base: {
        background: 'transparent',
        color: 'var(--ink)',
        border: '1.5px solid transparent'
      },
      hover: {
        background: 'rgba(35,32,28,.07)'
      }
    },
    teal: {
      base: {
        background: 'var(--teal-deep)',
        color: 'var(--paper-2)',
        border: '1.5px solid var(--teal-deep)'
      },
      hover: {
        background: 'var(--teal)',
        borderColor: 'var(--teal)'
      }
    },
    signal: {
      base: {
        background: 'var(--terracotta)',
        color: 'var(--paper-2)',
        border: '1.5px solid var(--terracotta)'
      },
      hover: {
        background: 'var(--terracotta-deep)',
        borderColor: 'var(--terracotta-deep)'
      }
    },
    sky: {
      base: {
        background: 'var(--olive)',
        color: 'var(--ink)',
        border: '1.5px solid var(--olive)'
      },
      hover: {
        background: 'var(--olive-deep)',
        color: 'var(--paper-2)',
        borderColor: 'var(--olive-deep)'
      }
    }
  };
  const pal = palettes[variant] || palettes.primary;
  const s = sizes[size] || sizes.md;
  const composed = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.6em',
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    textTransform: 'uppercase',
    textDecoration: 'none',
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    width: fullWidth ? '100%' : 'auto',
    whiteSpace: 'nowrap',
    transition: 'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    transform: active && !disabled ? 'scale(0.97)' : 'scale(1)',
    opacity: disabled ? 0.45 : 1,
    ...s,
    ...pal.base,
    ...(hover && !disabled ? pal.hover : null),
    ...style
  };
  const Tag = href ? 'a' : as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    style: composed,
    "aria-disabled": disabled || undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  }, rest), children, arrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      fontSize: '1.15em',
      lineHeight: 0,
      transform: 'translateY(1px)'
    }
  }, "\u2192"));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/primitives/Button.jsx", error: String((e && e.message) || e) }); }

// components/primitives/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Divider — editorial rule. `plain` hairline, or `ornament` with a centered
 * glyph breaking the line (used between stories / footer sections).
 */
function Divider({
  variant = 'plain',
  ornament = '\u273B',
  tone = 'ink',
  spacing = 32,
  style,
  ...rest
}) {
  const tones = {
    ink: 'var(--border-strong)',
    sand: 'var(--border)',
    terracotta: 'var(--terracotta)',
    teal: 'var(--teal)'
  };
  const c = tones[tone] || tones.ink;
  if (variant === 'ornament') {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '18px',
        margin: `${spacing}px 0`,
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: '1px',
        background: c,
        opacity: 0.5
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: c,
        fontSize: '14px',
        lineHeight: 1
      },
      "aria-hidden": true
    }, ornament), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: '1px',
        background: c,
        opacity: 0.5
      }
    }));
  }
  return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      border: 0,
      height: '1px',
      background: c,
      opacity: variant === 'rule' ? 1 : 0.4,
      margin: `${spacing}px 0`,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/primitives/Divider.jsx", error: String((e && e.message) || e) }); }

// components/primitives/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow — letterspaced uppercase kicker that sits above headings.
 * Optionally flanked by short rules for the editorial "section marker" look.
 */
function Eyebrow({
  children,
  color = 'ink',
  rule = false,
  align = 'left',
  style,
  ...rest
}) {
  const colors = {
    terracotta: 'var(--terracotta)',
    ink: 'var(--ink)',
    teal: 'var(--teal-deep)',
    olive: 'var(--olive-deep)',
    paper: 'var(--paper-2)'
  };
  const c = colors[color] || colors.ink;
  const label = /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: c,
      ...style
    }
  }, rest), children);
  if (!rule) return label;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '14px',
      justifyContent: align === 'center' ? 'center' : 'flex-start',
      width: align === 'center' ? '100%' : 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      height: '1px',
      width: '34px',
      background: c,
      opacity: 0.6
    }
  }), label, align === 'center' && /*#__PURE__*/React.createElement("span", {
    style: {
      height: '1px',
      width: '34px',
      background: c,
      opacity: 0.6
    }
  }));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/primitives/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionHeading — eyebrow + display headline (+ optional lede). The core
 * editorial title block. Set `display` for the oversized Bodoni masthead look.
 */
function SectionHeading({
  eyebrow,
  title,
  lede,
  align = 'left',
  size = 'lg',
  tone = 'ink',
  style,
  ...rest
}) {
  const sizes = {
    md: 'var(--fs-h1)',
    lg: 'var(--fs-display-md)',
    xl: 'var(--fs-display-lg)',
    display: 'var(--fs-display-xl)'
  };
  const tones = {
    ink: 'var(--ink)',
    paper: 'var(--paper-2)',
    teal: 'var(--teal-deep)',
    terracotta: 'var(--terracotta)'
  };
  const isCenter = align === 'center';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      maxWidth: isCenter ? '760px' : 'none',
      marginInline: isCenter ? 'auto' : 0,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '18px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    color: tone === 'paper' ? 'paper' : 'ink',
    rule: isCenter,
    align: align
  }, eyebrow)), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: sizes[size] || sizes.lg,
      lineHeight: 'var(--lh-snug)',
      letterSpacing: 'var(--ls-tight)',
      color: tones[tone] || tones.ink,
      textWrap: 'balance'
    }
  }, title), lede && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0',
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--fs-h4)',
      lineHeight: 'var(--lh-relaxed)',
      color: tone === 'paper' ? 'rgba(251,245,233,.85)' : 'var(--ink-2)',
      maxWidth: '640px',
      marginInline: isCenter ? 'auto' : 0,
      fontStyle: 'italic'
    }
  }, lede));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/primitives/Ribbon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _kf = false;
function ensureKeyframes() {
  if (_kf || typeof document === 'undefined') return;
  _kf = true;
  const el = document.createElement('style');
  el.textContent = '@keyframes fe-ribbon-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}';
  document.head.appendChild(el);
}

/**
 * Ribbon — the signature scrolling marquee band ("REAL ITALIAN LIVING · …").
 * A wide horizontal strip of repeating letterspaced text separated by a glyph.
 */
function Ribbon({
  text = 'Founders Retreat',
  separator = '\u273B',
  tone = 'cobalt',
  speed = 32,
  count = 8,
  style,
  ...rest
}) {
  ensureKeyframes();
  const tones = {
    cobalt: {
      bg: 'var(--cobalt)',
      fg: 'var(--paper-2)'
    },
    terracotta: {
      bg: 'var(--terracotta)',
      fg: 'var(--paper-2)'
    },
    olive: {
      bg: 'var(--olive)',
      fg: 'var(--paper-2)'
    },
    teal: {
      bg: 'var(--teal-deep)',
      fg: 'var(--paper-2)'
    },
    ink: {
      bg: 'var(--ink)',
      fg: 'var(--paper-2)'
    }
  };
  const t = tones[tone] || tones.cobalt;
  const items = Array.from({
    length: count
  });
  const strip = /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      flexShrink: 0
    },
    "aria-hidden": true
  }, items.map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: '12px',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: t.fg,
      padding: '0 22px'
    }
  }, text), /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.fg,
      opacity: 0.7,
      fontSize: '11px'
    }
  }, separator))));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: t.bg,
      overflow: 'hidden',
      padding: '11px 0',
      width: '100%',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      whiteSpace: 'nowrap',
      willChange: 'transform',
      animation: `fe-ribbon-scroll ${speed}s linear infinite`
    }
  }, strip, strip));
}
Object.assign(__ds_scope, { Ribbon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/primitives/Ribbon.jsx", error: String((e && e.message) || e) }); }

// components/primitives/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag / Badge — small editorial label. `pill` (default) for filled chips,
 * `outline` for hairline chips. Used for categories, dates, "New" flags.
 */
function Tag({
  children,
  tone = 'terracotta',
  variant = 'outline',
  style,
  ...rest
}) {
  const tones = {
    terracotta: {
      fg: 'var(--terracotta-deep)',
      bg: 'var(--terracotta-wash)',
      bd: 'var(--terracotta)'
    },
    teal: {
      fg: 'var(--teal-deep)',
      bg: 'var(--teal-wash)',
      bd: 'var(--teal)'
    },
    olive: {
      fg: 'var(--olive-deep)',
      bg: 'rgba(140,138,80,.16)',
      bd: 'var(--olive)'
    },
    ink: {
      fg: 'var(--ink)',
      bg: 'var(--sand)',
      bd: 'var(--ink)'
    },
    cobalt: {
      fg: 'var(--paper-2)',
      bg: 'var(--cobalt)',
      bd: 'var(--cobalt)'
    }
  };
  const t = tones[tone] || tones.terracotta;
  const filled = variant === 'pill';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: '11px',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      color: filled ? tone === 'cobalt' ? t.fg : 'var(--paper-2)' : t.fg,
      background: filled ? t.bd : t.bg,
      border: `1px solid ${filled ? t.bd : t.bd}`,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/primitives/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — editorial image card. Boxy framed photo on top, then optional tag,
 * serif title, body copy, and a link. Hover gently lifts and warms the image.
 */
function Card({
  image,
  imageAlt = '',
  tag,
  tagTone = 'teal',
  title,
  children,
  meta,
  href,
  linkLabel = 'Read more',
  align = 'left',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href || undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      textDecoration: 'none',
      color: 'inherit',
      background: 'transparent',
      textAlign: align,
      cursor: href ? 'pointer' : 'default',
      ...style
    }
  }, rest), image && /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      borderRadius: 'var(--radius-sm)',
      marginBottom: '20px',
      aspectRatio: '4 / 3',
      border: '1px solid var(--border-muted)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      filter: 'saturate(0.92) contrast(1.02)',
      transform: hover ? 'scale(1.045)' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  })), tag && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '12px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    tone: tagTone
  }, tag)), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--fs-h3)',
      lineHeight: 'var(--lh-heading)',
      letterSpacing: 'var(--ls-tight)',
      color: 'var(--ink)'
    }
  }, title), children && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--ink-2)'
    }
  }, children), meta && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '14px 0 0',
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)'
    }
  }, meta), href && /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: '16px',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: '12px',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink)',
      alignSelf: align === 'center' ? 'center' : 'flex-start'
    }
  }, linkLabel, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      transform: hover ? 'translateX(4px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }, "\u2192")));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// kit-home.jsx
try { (() => {
/* Founders Retreat — invitation landing page.
   Editorial one-page scroll built on the design-system components.
   Attaches window.FRLanding. */
const DS = window.TheFoundersEditDesignSystem_0cfd4a;
const {
  Button,
  Eyebrow,
  Tag,
  Ribbon,
  SectionHeading,
  Input,
  Select,
  Checkbox
} = DS;
const {
  useState,
  useRef
} = React;
const P = '../../assets/photos/';
const PR = '../../assets/portraits/';
const AIRBNB = 'https://www.airbnb.com/rooms/1208903670876748539?adults=15&check_in=2026-10-02&check_out=2026-10-05&guests=15';
const GFORM = 'https://docs.google.com/forms/d/e/1FAIpQLSdkhc1sxb-jko5rLag4RQfRqT17zy3yxjQU2fxCESkKlB6iCQ/viewform?embedded=true';
const WRAP = {
  maxWidth: '1120px',
  margin: '0 auto',
  padding: '0 40px'
};
const scrollToId = id => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({
    top: el.getBoundingClientRect().top + window.pageYOffset - 24,
    behavior: 'smooth'
  });
};

/* ---------- Nav ---------- */
function Nav() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(244,235,219,.86)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      height: '68px'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '30px'
    }
  }, [['The Weekend', 'weekend'], ['Who', 'who'], ['Details', 'details'], ['Stay', 'stay']].map(([l, id]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => scrollToId(id),
    style: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: '11px',
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: 'var(--ink)'
    }
  }, l)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => scrollToId('rsvp')
  }, "Secure your seat"))));
}

/* ---------- Hero ---------- */
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: 'calc(100vh - 68px)',
      display: 'flex',
      alignItems: 'flex-end',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + 'courtyard-table.webp',
    alt: "A long table set under the trees",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 30%',
      filter: 'saturate(.92) contrast(1.02)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(51,40,30,.30) 0%, rgba(51,40,30,.05) 40%, rgba(51,40,30,.62) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      position: 'relative',
      paddingBottom: '72px',
      paddingTop: '120px',
      color: 'var(--paper-2)',
      width: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      background: 'rgba(23,21,15,.55)',
      backdropFilter: 'blur(3px)',
      padding: '9px 18px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid rgba(250,248,243,.25)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "paper"
  }, "October 2\u20135, 2026 \xA0\xB7\xA0 By invitation only")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '20px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(58px, 11vw, 148px)',
      lineHeight: .9,
      letterSpacing: '-.025em'
    }
  }, "A Founders", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 400,
      letterSpacing: 0,
      color: 'var(--paper-2)',
      fontSize: 'clamp(52px,10vw,132px)'
    }
  }, "Retreat")), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '640px',
      margin: '26px 0 0',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'clamp(19px,2.4vw,26px)',
      lineHeight: 1.55,
      color: 'rgba(251,245,233,.94)'
    }
  }, "A collaborative weekend for women who own \u2014 and are actively growing \u2014 their businesses."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '34px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    arrow: true,
    onClick: () => scrollToId('rsvp')
  }, "Secure your seat"))));
}

/* ---------- The big question ---------- */
function Question() {
  return /*#__PURE__*/React.createElement("section", {
    id: "weekend",
    style: {
      background: 'var(--paper)',
      padding: '110px 0 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: WRAP
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      maxWidth: '17ch',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(34px,5.2vw,68px)',
      lineHeight: 1.06,
      letterSpacing: '-.02em',
      color: 'var(--ink)',
      textWrap: 'balance'
    }
  }, "What if your next breakthrough came from someone sitting across the dinner table?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '64px',
      marginTop: '56px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 1.75,
      color: 'var(--ink-2)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Owning a business is exciting, rewarding, and deeply personal. It can also be surprisingly lonely."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0'
    }
  }, "Most of us spend our days making decisions without anyone to bounce ideas off of. We celebrate wins quietly, second-guess ourselves, and spend hours solving problems someone else may have already figured out."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0'
    }
  }, "So we wanted to create the kind of weekend we all wish existed.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '14px'
    }
  }, ['Not a conference.', 'Not a networking event.', 'Not a room where one person teaches while everyone else listens.'].map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 'clamp(22px,3vw,30px)',
      color: 'var(--ink-3)',
      textDecoration: 'line-through',
      textDecorationColor: 'var(--sand-deep)',
      textDecorationThickness: '2px'
    }
  }, t))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '28px 0 0',
      fontFamily: 'var(--font-serif)',
      fontSize: '24px',
      lineHeight: 1.5,
      color: 'var(--ink)'
    }
  }, "A small group of thoughtful business owners coming together to share what they\u2019ve learned, ask for help where they\u2019re stuck, and build alongside one another."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0',
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 'var(--fs-body-lg)',
      color: 'var(--ink)'
    }
  }, "For one weekend, we\u2019ll bring our businesses together under one roof.")))));
}

/* ---------- Handwritten divider ---------- */
function GatherDivider() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink)',
      padding: '58px 24px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 'clamp(46px,8vw,96px)',
      lineHeight: 1.05,
      color: 'var(--paper-2)'
    }
  }, "Gather. Learn. Build."));
}

/* ---------- Full-bleed photo break ---------- */
function PhotoBreak({
  src,
  alt,
  caption
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: '58vh',
      minHeight: '420px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'saturate(.92)'
    }
  }), caption && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(0deg, rgba(51,40,30,.5), transparent 55%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: '40px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 'clamp(22px,3vw,34px)',
      color: 'var(--paper-2)'
    }
  }, caption))));
}

/* ---------- Two-column story block ---------- */
function Story({
  id,
  eyebrow,
  title,
  body,
  img,
  alt,
  flip
}) {
  const text = /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '520px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: eyebrow,
    title: title
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '22px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 1.75,
      color: 'var(--ink-2)'
    }
  }, body));
  const image = /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden',
      border: '1px solid var(--border-muted)',
      aspectRatio: '4/5',
      boxShadow: 'var(--shadow-frame)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'saturate(.92)'
    }
  }));
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      background: 'var(--paper-2)',
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '72px',
      alignItems: 'center'
    }
  }, flip ? /*#__PURE__*/React.createElement(React.Fragment, null, image, text) : /*#__PURE__*/React.createElement(React.Fragment, null, text, image)));
}

/* ---------- What the weekend looks like ---------- */
function Weekend() {
  const bullets = ['Short sessions led by the business owners in the room', 'Collaborative problem-solving around real business challenges', 'Honest feedback on websites, branding, messaging, and offers', 'Time for headshots, product photography, and content creation', 'Shared meals and late-night conversations', 'Morning coffee, beach walks, and plenty of space to recharge'];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--paper)',
      padding: '100px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: WRAP
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What the weekend looks like",
    title: "Not your average networking event",
    lede: "Yes, there will be a few short talks \u2014 but mostly it\u2019s space for meaningful conversations, practical learning, and time to actually work on our businesses."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4px 48px',
      marginTop: '48px'
    }
  }, bullets.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: '18px',
      alignItems: 'baseline',
      padding: '20px 0',
      borderTop: '1px solid var(--border-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '18px',
      color: 'var(--ink-3)',
      minWidth: '28px'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 1.5,
      color: 'var(--ink)'
    }
  }, b)))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '44px 0 0',
      maxWidth: '54ch',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: '24px',
      lineHeight: 1.5,
      color: 'var(--ink-2)'
    }
  }, "Some of the most valuable conversations probably won\u2019t happen during a scheduled session. They\u2019ll happen over breakfast, on the porch, or while walking down the beach.")));
}

/* ---------- Who you'll meet ---------- */
function Who() {
  const fields = ['Photography', 'Product', 'Ecommerce', 'Travel', 'Wellness', 'Fitness', 'Content Creation', 'Creative Services', 'Brand Strategy', 'Community Building'];
  const leftPix = [PR + 'portrait-02.jpeg', PR + 'portrait-05.jpeg', PR + 'portrait-09.jpeg'];
  const rightPix = [PR + 'portrait-06.jpeg', PR + 'portrait-07.jpeg', PR + 'portrait-10.jpeg'];
  const col = (pix, edge) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '14px'
    }
  }, pix.map((src, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      overflow: 'hidden',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-muted)',
      aspectRatio: '4/5',
      transform: `rotate(${(edge === 'left' ? -1 : 1) * (i % 2 ? 1.4 : -1)}deg)`
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'saturate(.9) grayscale(.15)'
    }
  }))));
  return /*#__PURE__*/React.createElement("section", {
    id: "who"
  }, /*#__PURE__*/React.createElement(Ribbon, {
    text: "Different businesses \xB7 Different perspectives \xB7 One shared goal",
    tone: "ink",
    speed: 30
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper-2)',
      padding: '100px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1240px',
      margin: '0 auto',
      padding: '0 40px',
      display: 'grid',
      gridTemplateColumns: 'minmax(150px, 1fr) minmax(0, 2.1fr) minmax(150px, 1fr)',
      gap: '40px',
      alignItems: 'center'
    }
  }, col(leftPix, 'left'), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Who you'll meet",
    title: "We're keeping the guest list a surprise",
    align: "center",
    lede: "Every person has been carefully chosen for the perspective they bring and their willingness to contribute. Among the group, you'll find owners building in areas like:"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px',
      justifyContent: 'center',
      maxWidth: '620px',
      margin: '40px auto 0'
    }
  }, fields.map((f, i) => /*#__PURE__*/React.createElement(Tag, {
    key: i,
    tone: "ink"
  }, f)))), col(rightPix, 'right'))));
}

/* ---------- Where we'll stay ---------- */
function Stay() {
  return /*#__PURE__*/React.createElement("section", {
    id: "stay",
    style: {
      background: 'var(--paper)',
      padding: '100px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: WRAP
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Where we'll stay",
    title: "A beach house in Wilmington, NC",
    lede: "We'll share one roof for the weekend \u2014 an ocean-view great room for sessions, a long table for dinners, wraparound porches, and a firepit under string lights for the late-night conversations."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gridAutoRows: '128px',
      gap: '12px',
      marginTop: '44px'
    }
  }, /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      gridColumn: 'span 4',
      gridRow: 'span 3',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-muted)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + 'house-exterior.png',
    alt: "The beach house exterior",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: 'absolute',
      left: '18px',
      bottom: '16px',
      fontFamily: 'var(--font-script)',
      fontSize: '34px',
      color: 'var(--paper-2)',
      textShadow: '0 1px 12px rgba(23,21,15,.6)'
    }
  }, "Home for the weekend")), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 2',
      gridRow: 'span 2',
      overflow: 'hidden',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-muted)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + 'house-living.png',
    alt: "Ocean-view living and dining room",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 2',
      overflow: 'hidden',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-muted)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + 'house-firepit.png',
    alt: "The firepit at sunset",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 40%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 2',
      gridRow: 'span 2',
      overflow: 'hidden',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-muted)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + 'house-porch.png',
    alt: "The wraparound porch",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 2',
      gridRow: 'span 2',
      overflow: 'hidden',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-muted)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + 'house-bedroom.png',
    alt: "A light-filled bedroom",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 2',
      gridRow: 'span 2',
      overflow: 'hidden',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-muted)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + 'house-marsh.png',
    alt: "The marsh and gazebo out back",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '32px',
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    arrow: true,
    as: "a",
    href: AIRBNB,
    target: "_blank",
    rel: "noopener"
  }, "View the house on Airbnb"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: '18px',
      color: 'var(--ink-2)'
    }
  }, "Sleeps the whole group \xB7 Oct 2\u20135, 2026"))));
}

/* ---------- Details ---------- */
function Details() {
  const rows = [{
    k: 'When',
    v: 'October 2\u20135, 2026',
    n: 'Friday afternoon through Sunday.'
  }, {
    k: 'Where',
    v: 'A beach house in Wilmington, NC',
    n: 'On the Carolina coast \u2014 see \u201cWhere we\u2019ll stay\u201d below.'
  }, {
    k: 'Group size',
    v: 'Approximately 10\u201312',
    n: 'Kept small so everyone has a seat at the table.'
  }, {
    k: 'Cost',
    v: '$350 per person',
    n: 'Accommodations and shared meals, split evenly \u2014 not a paid retreat.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "details",
    style: {
      background: 'var(--ink)',
      color: 'var(--paper-2)',
      padding: '100px 0'
    },
    "data-comment-anchor": "3090e3fbd3-section-249-5"
  }, /*#__PURE__*/React.createElement("div", {
    style: WRAP
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "A few details",
    title: "The practical parts",
    tone: "paper"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '48px',
      borderTop: '1px solid rgba(251,245,233,.24)'
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '200px 1fr',
      gap: '32px',
      padding: '28px 0',
      borderBottom: '1px solid rgba(251,245,233,.24)',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: '12px',
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: 'var(--sand)'
    }
  }, r.k), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(24px,3vw,34px)',
      lineHeight: 1.15,
      color: 'var(--paper-2)'
    }
  }, r.v), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '8px',
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      color: 'rgba(251,245,233,.72)'
    }
  }, r.n)))))));
}

/* ---------- Before the weekend ---------- */
function Before() {
  const qs = ['What could you teach?', 'What\u2019s the biggest challenge you\u2019re working through?', 'What would you love to leave the weekend with?'];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--paper)',
      padding: '100px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      maxWidth: '860px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Before the weekend",
    title: "A short questionnaire",
    align: "center",
    lede: "We'll use your answers to shape the conversations and build the weekend around the people actually in the room. No two retreats should ever look the same."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '48px',
      display: 'flex',
      flexDirection: 'column',
      gap: '18px'
    }
  }, qs.map((q, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: '22px',
      alignItems: 'center',
      background: 'var(--paper-2)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      padding: '24px 28px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: '44px',
      color: 'var(--ink-3)',
      lineHeight: 1
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '24px',
      color: 'var(--ink)'
    }
  }, q))))));
}

/* ---------- RSVP ---------- */
function RSVP() {
  return /*#__PURE__*/React.createElement("section", {
    id: "rsvp",
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + 'pier-sunset.png',
    alt: "Under the pier at sunset",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'saturate(.9) brightness(.86)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(51,40,30,.55), rgba(51,40,30,.72))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      position: 'relative',
      maxWidth: '760px',
      padding: '110px 40px',
      textAlign: 'center',
      color: 'var(--paper-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 'clamp(40px,7vw,72px)',
      color: 'var(--paper-2)',
      lineHeight: 1
    }
  }, "Secure your seat"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px auto 0',
      maxWidth: '48ch',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 1.7,
      color: 'rgba(251,245,233,.92)'
    }
  }, "You\u2019ve been nominated \u2014 now claim your spot. Fill out the form below by ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--paper-2)'
    }
  }, "August 8"), " and we\u2019ll follow up with the details and next steps."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '40px',
      background: 'var(--paper-2)',
      borderRadius: 'var(--radius-lg)',
      padding: '16px',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    title: "A Founders Retreat RSVP form",
    src: GFORM,
    style: {
      width: '100%',
      height: '820px',
      border: 0,
      borderRadius: 'var(--radius-md)',
      background: 'var(--paper-2)'
    }
  }, "Loading\u2026")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '30px 0 0',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: '20px',
      color: 'var(--paper-2)'
    }
  }, "Come ready to share what you\u2019ve learned. Leave with ideas you couldn\u2019t have found on your own.")));
}

/* ---------- Footer ---------- */
function FooterBar() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink)',
      color: 'var(--paper-2)',
      padding: '52px 0 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: '34px'
    }
  }, "A Founders Retreat"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'rgba(251,245,233,.6)'
    }
  }, "October 2\u20135, 2026 \xB7 Carolina Coast \xB7 By invitation")));
}
function FRLanding() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Question, null), /*#__PURE__*/React.createElement(GatherDivider, null), /*#__PURE__*/React.createElement(Story, {
    id: "invited",
    eyebrow: "Why you were invited",
    title: "Someone believes you'll make the weekend better",
    img: P + 'garden-painting-class.webp',
    alt: "Working together outdoors",
    body: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0
      }
    }, "Every person attending has been personally nominated by one of our retreat leaders \u2014 because someone who knows the work you do believes you\u2019ll make the weekend better."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '18px 0 0'
      }
    }, "We\u2019re intentionally bringing together owners from different industries, experiences, and stages. Some have been building for years. Others are just beginning their next chapter."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '18px 0 0'
      }
    }, "The best groups aren\u2019t made of people who think alike \u2014 they\u2019re made of people generous enough to share what they\u2019ve learned and curious enough to ask for help."))
  }), /*#__PURE__*/React.createElement(PhotoBreak, {
    src: P + 'water-dusk.jpeg',
    alt: "The water at dusk",
    caption: "Everyone teaches. Everyone learns."
  }), /*#__PURE__*/React.createElement(Story, {
    id: "teach",
    eyebrow: "Everyone teaches, everyone learns",
    title: "You already know something someone else needs",
    flip: true,
    img: P + 'journaling-candles.png',
    alt: "Notebooks and candles on a wooden table",
    body: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0
      }
    }, "Everyone will share something that\u2019s helped them build \u2014 client acquisition, branding, content, partnerships, systems, pricing, or hard-won lessons. And everyone gets dedicated time to bring one of their biggest challenges to the group:"), /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: '20px 0 0',
        padding: 0,
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }
    }, ['The idea you\u2019ve been sitting on.', 'The offer that isn\u2019t converting.', 'The website that doesn\u2019t quite feel right.', 'The next step you can\u2019t see clearly.'].map((t, i) => /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        fontFamily: 'var(--font-serif)',
        fontStyle: 'italic',
        fontSize: '21px',
        color: 'var(--ink)',
        paddingLeft: '18px',
        borderLeft: '2px solid var(--ink)'
      }
    }, t))), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '20px 0 0'
      }
    }, "We\u2019ll ask questions, offer honest feedback, and help each other move forward."))
  }), /*#__PURE__*/React.createElement(Weekend, null), /*#__PURE__*/React.createElement(Who, null), /*#__PURE__*/React.createElement(Details, null), /*#__PURE__*/React.createElement(Stay, null), /*#__PURE__*/React.createElement(Before, null), /*#__PURE__*/React.createElement(RSVP, null), /*#__PURE__*/React.createElement(FooterBar, null));
}
window.FRLanding = FRLanding;
})(); } catch (e) { __ds_ns.__errors.push({ path: "kit-home.jsx", error: String((e && e.message) || e) }); }

// site/kit-home.jsx
try { (() => {
/* Founders Retreat — invitation landing page.
   Editorial one-page scroll built on the design-system components.
   Attaches window.FRLanding. */
const DS = window.TheFoundersEditDesignSystem_0cfd4a;
const {
  Button,
  Eyebrow,
  Tag,
  Ribbon,
  SectionHeading,
  Input,
  Select,
  Checkbox
} = DS;
const {
  useState,
  useRef
} = React;
const P = 'assets/photos/';
const PR = 'assets/portraits/';
const AIRBNB = 'https://www.airbnb.com/rooms/1208903670876748539?adults=15&check_in=2026-10-02&check_out=2026-10-05&guests=15';
const GFORM = 'https://docs.google.com/forms/d/e/1FAIpQLSdkhc1sxb-jko5rLag4RQfRqT17zy3yxjQU2fxCESkKlB6iCQ/viewform?embedded=true';
const WRAP = {
  maxWidth: '1120px',
  margin: '0 auto',
  padding: '0 40px'
};
const scrollToId = id => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({
    top: el.getBoundingClientRect().top + window.pageYOffset - 24,
    behavior: 'smooth'
  });
};

/* ---------- Nav ---------- */
function Nav() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(244,235,219,.86)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      height: '68px'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '30px'
    }
  }, [['The Weekend', 'weekend'], ['Who', 'who'], ['Details', 'details'], ['Stay', 'stay']].map(([l, id]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => scrollToId(id),
    style: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: '11px',
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: 'var(--ink)'
    }
  }, l)), /*#__PURE__*/React.createElement(Button, {
    variant: "sky",
    size: "sm",
    onClick: () => scrollToId('rsvp')
  }, "Secure your seat"))));
}

/* ---------- Hero ---------- */
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: 'calc(100vh - 68px)',
      display: 'flex',
      alignItems: 'flex-end',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + 'courtyard-table.webp',
    alt: "A long table set under the trees",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 30%',
      filter: 'saturate(.92) contrast(1.02)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(51,40,30,.30) 0%, rgba(51,40,30,.05) 40%, rgba(51,40,30,.62) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      position: 'relative',
      paddingBottom: '72px',
      paddingTop: '120px',
      color: 'var(--paper-2)',
      width: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      background: 'rgba(23,21,15,.55)',
      backdropFilter: 'blur(3px)',
      padding: '9px 18px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid rgba(250,248,243,.25)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "paper"
  }, "October 2\u20135, 2026 \xA0\xB7\xA0 By invitation only")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '20px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(58px, 11vw, 148px)',
      lineHeight: .9,
      letterSpacing: '-.025em'
    }
  }, "A Founders", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 400,
      letterSpacing: 0,
      color: 'var(--paper-2)',
      fontSize: 'clamp(52px,10vw,132px)'
    }
  }, "Retreat")), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '640px',
      margin: '26px 0 0',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'clamp(19px,2.4vw,26px)',
      lineHeight: 1.55,
      color: 'rgba(251,245,233,.94)'
    }
  }, "A collaborative weekend for women who own \u2014 and are actively growing \u2014 their businesses."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '34px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "sky",
    size: "lg",
    arrow: true,
    onClick: () => scrollToId('rsvp')
  }, "Secure your seat"))));
}

/* ---------- The big question ---------- */
function Question() {
  return /*#__PURE__*/React.createElement("section", {
    id: "weekend",
    style: {
      background: 'var(--paper)',
      padding: '110px 0 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: WRAP
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.35fr 1fr',
      gap: '56px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      maxWidth: '17ch',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(34px,5.2vw,68px)',
      lineHeight: 1.06,
      letterSpacing: '-.02em',
      color: 'var(--ink)',
      textWrap: 'balance'
    }
  }, "What if your next breakthrough came from someone sitting across the dinner table?"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-muted)',
      aspectRatio: '4/5',
      boxShadow: 'var(--shadow-frame)',
      transform: 'rotate(1.5deg)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + 'magazine-flatlay.jpeg',
    alt: "An editorial flatlay of notes and coffee",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'saturate(.92)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: '-22px',
      left: '-14px',
      fontFamily: 'var(--font-script)',
      fontSize: 'clamp(32px,4vw,52px)',
      color: 'var(--olive-deep)',
      transform: 'rotate(-4deg)'
    }
  }, "let\u2019s find out"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '64px',
      marginTop: '56px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 1.75,
      color: 'var(--ink-2)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Owning a business is exciting, rewarding, and deeply personal. It can also be surprisingly lonely."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0'
    }
  }, "Most of us spend our days making decisions without anyone to bounce ideas off of. We celebrate wins quietly, second-guess ourselves, and spend hours solving problems someone else may have already figured out."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0'
    }
  }, "So we wanted to create the kind of weekend we all wish existed.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '14px'
    }
  }, ['Not a conference.', 'Not a networking event.', 'Not a room where one person teaches while everyone else listens.'].map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 'clamp(22px,3vw,30px)',
      color: 'var(--ink-3)',
      textDecoration: 'line-through',
      textDecorationColor: 'var(--sand-deep)',
      textDecorationThickness: '2px'
    }
  }, t))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '28px 0 0',
      fontFamily: 'var(--font-serif)',
      fontSize: '24px',
      lineHeight: 1.5,
      color: 'var(--ink)'
    }
  }, "A small group of thoughtful business owners coming together to share what they\u2019ve learned, ask for help where they\u2019re stuck, and build alongside one another."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0',
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 'var(--fs-body-lg)',
      color: 'var(--ink)'
    }
  }, "For one weekend, we\u2019ll bring our businesses together under one roof.")))));
}

/* ---------- Handwritten divider ---------- */
function GatherDivider() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--teal-wash)',
      padding: '58px 24px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 'clamp(46px,8vw,96px)',
      lineHeight: 1.05,
      color: 'var(--ink)'
    }
  }, "Gather. Learn. Build."));
}

/* ---------- Full-bleed photo break ---------- */
function PhotoBreak({
  src,
  alt,
  caption
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: '58vh',
      minHeight: '420px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'saturate(.92)'
    }
  }), caption && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(0deg, rgba(51,40,30,.5), transparent 55%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: '40px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 'clamp(22px,3vw,34px)',
      color: 'var(--paper-2)'
    }
  }, caption))));
}

/* ---------- Two-column story block ---------- */
function Story({
  id,
  eyebrow,
  title,
  body,
  img,
  alt,
  flip
}) {
  const text = /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '520px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: eyebrow,
    title: title
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '22px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 1.75,
      color: 'var(--ink-2)'
    }
  }, body));
  const image = /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden',
      border: '1px solid var(--border-muted)',
      aspectRatio: '4/5',
      boxShadow: 'var(--shadow-frame)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'saturate(.92)'
    }
  }));
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      background: 'var(--paper-2)',
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '72px',
      alignItems: 'center'
    }
  }, flip ? /*#__PURE__*/React.createElement(React.Fragment, null, image, text) : /*#__PURE__*/React.createElement(React.Fragment, null, text, image)));
}

/* ---------- What the weekend looks like ---------- */
function Weekend() {
  const bullets = ['Short sessions led by the business owners in the room', 'Collaborative problem-solving around real business challenges', 'Honest feedback on websites, branding, messaging, and offers', 'Time for headshots, product photography, and content creation', 'Shared meals and late-night conversations', 'Morning coffee, beach walks, and plenty of space to recharge'];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--paper)',
      padding: '100px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: WRAP
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What the weekend looks like",
    title: "Not your average networking event",
    lede: "Yes, there will be a few short talks \u2014 but mostly it\u2019s space for meaningful conversations, practical learning, and time to actually work on our businesses."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4px 48px',
      marginTop: '48px'
    }
  }, bullets.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: '18px',
      alignItems: 'baseline',
      padding: '20px 0',
      borderTop: '1px solid var(--border-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '18px',
      color: 'var(--ink-3)',
      minWidth: '28px'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 1.5,
      color: 'var(--ink)'
    }
  }, b)))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '44px 0 0',
      maxWidth: '54ch',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: '24px',
      lineHeight: 1.5,
      color: 'var(--ink-2)'
    }
  }, "Some of the most valuable conversations probably won\u2019t happen during a scheduled session. They\u2019ll happen over breakfast, on the porch, or while walking down the beach.")));
}

/* ---------- Who you'll meet ---------- */
function Who() {
  const fields = ['Photography', 'Product', 'Ecommerce', 'Travel', 'Wellness', 'Fitness', 'Content Creation', 'Creative Services', 'Brand Strategy', 'Community Building'];
  const leftPix = [PR + 'portrait-02.jpeg', PR + 'portrait-05.jpeg', PR + 'portrait-09.jpeg'];
  const rightPix = [PR + 'portrait-06.jpeg', PR + 'portrait-07.jpeg', PR + 'portrait-10.jpeg'];
  const col = (pix, edge) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '14px'
    }
  }, pix.map((src, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      overflow: 'hidden',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-muted)',
      aspectRatio: '4/5',
      transform: `rotate(${(edge === 'left' ? -1 : 1) * (i % 2 ? 1.4 : -1)}deg)`
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'saturate(.9) grayscale(.15)'
    }
  }))));
  return /*#__PURE__*/React.createElement("section", {
    id: "who"
  }, /*#__PURE__*/React.createElement(Ribbon, {
    text: "Different businesses \xB7 Different perspectives \xB7 One shared goal",
    tone: "ink",
    speed: 30
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper-2)',
      padding: '100px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1240px',
      margin: '0 auto',
      padding: '0 40px',
      display: 'grid',
      gridTemplateColumns: 'minmax(150px, 1fr) minmax(0, 2.1fr) minmax(150px, 1fr)',
      gap: '40px',
      alignItems: 'center'
    }
  }, col(leftPix, 'left'), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Who you'll meet",
    title: "We're keeping the guest list a surprise",
    align: "center",
    lede: "Every person has been carefully chosen for the perspective they bring and their willingness to contribute. Among the group, you'll find owners building in areas like:"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px',
      justifyContent: 'center',
      maxWidth: '620px',
      margin: '40px auto 0'
    }
  }, fields.map((f, i) => /*#__PURE__*/React.createElement(Tag, {
    key: i,
    tone: "ink"
  }, f)))), col(rightPix, 'right'))));
}

/* ---------- Where we'll stay ---------- */
function Stay() {
  return /*#__PURE__*/React.createElement("section", {
    id: "stay",
    style: {
      background: 'var(--paper)',
      padding: '100px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: WRAP
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Where we'll stay",
    title: "A beach house in Wilmington, NC",
    lede: "We'll share one roof for the weekend \u2014 an ocean-view great room for sessions, a long table for dinners, wraparound porches, and a firepit under string lights for the late-night conversations."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gridAutoRows: '128px',
      gap: '12px',
      marginTop: '44px'
    }
  }, /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      gridColumn: 'span 4',
      gridRow: 'span 3',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-muted)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + 'house-exterior.png',
    alt: "The beach house exterior",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: 'absolute',
      left: '18px',
      bottom: '16px',
      fontFamily: 'var(--font-script)',
      fontSize: '34px',
      color: 'var(--paper-2)',
      textShadow: '0 1px 12px rgba(23,21,15,.6)'
    }
  }, "Home for the weekend")), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 2',
      gridRow: 'span 2',
      overflow: 'hidden',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-muted)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + 'house-living.png',
    alt: "Ocean-view living and dining room",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 2',
      overflow: 'hidden',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-muted)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + 'house-firepit.png',
    alt: "The firepit at sunset",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 40%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 2',
      gridRow: 'span 2',
      overflow: 'hidden',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-muted)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + 'house-porch.png',
    alt: "The wraparound porch",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 2',
      gridRow: 'span 2',
      overflow: 'hidden',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-muted)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + 'house-bedroom.png',
    alt: "A light-filled bedroom",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 2',
      gridRow: 'span 2',
      overflow: 'hidden',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-muted)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + 'house-marsh.png',
    alt: "The marsh and gazebo out back",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '32px',
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    arrow: true,
    as: "a",
    href: AIRBNB,
    target: "_blank",
    rel: "noopener"
  }, "View the house on Airbnb"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: '18px',
      color: 'var(--ink-2)'
    }
  }, "Sleeps the whole group \xB7 Oct 2\u20135, 2026"))));
}

/* ---------- Details ---------- */
function Details() {
  const rows = [{
    k: 'When',
    v: 'October 2\u20135, 2026',
    n: 'Friday afternoon through Sunday.'
  }, {
    k: 'Where',
    v: 'A beach house in Wilmington, NC',
    n: 'On the Carolina coast \u2014 see \u201cWhere we\u2019ll stay\u201d below.'
  }, {
    k: 'Group size',
    v: 'Approximately 10\u201312',
    n: 'Kept small so everyone has a seat at the table.'
  }, {
    k: 'Cost',
    v: '$350 per person',
    n: 'Accommodations and shared meals, split evenly \u2014 not a paid retreat.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "details",
    style: {
      background: 'var(--teal-wash)',
      color: 'var(--ink)',
      padding: '100px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: WRAP
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "A few details",
    title: "The practical parts"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '48px',
      borderTop: '1.5px solid var(--ink)'
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '200px 1fr',
      gap: '32px',
      padding: '28px 0',
      borderBottom: '1px solid var(--border-muted)',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: '12px',
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: 'var(--ink-2)'
    }
  }, r.k), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(24px,3vw,34px)',
      lineHeight: 1.15,
      color: 'var(--ink)'
    }
  }, r.v), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '8px',
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      color: 'var(--ink-2)'
    }
  }, r.n)))))));
}

/* ---------- Before the weekend ---------- */
function Before() {
  const qs = ['What could you teach?', 'What\u2019s the biggest challenge you\u2019re working through?', 'What would you love to leave the weekend with?'];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--paper)',
      padding: '100px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      maxWidth: '860px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Before the weekend",
    title: "A short questionnaire",
    align: "center",
    lede: "We'll use your answers to shape the conversations and build the weekend around the people actually in the room. No two retreats should ever look the same."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '48px',
      display: 'flex',
      flexDirection: 'column',
      gap: '18px'
    }
  }, qs.map((q, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: '22px',
      alignItems: 'center',
      background: 'var(--paper-2)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      padding: '24px 28px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: '44px',
      color: 'var(--ink-3)',
      lineHeight: 1
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '24px',
      color: 'var(--ink)'
    }
  }, q))))));
}

/* ---------- RSVP ---------- */
function RSVP() {
  return /*#__PURE__*/React.createElement("section", {
    id: "rsvp",
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + 'pier-sunset.png',
    alt: "Under the pier at sunset",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'saturate(.9) brightness(.86)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(51,40,30,.55), rgba(51,40,30,.72))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      position: 'relative',
      maxWidth: '760px',
      padding: '110px 40px',
      textAlign: 'center',
      color: 'var(--paper-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 'clamp(40px,7vw,72px)',
      color: 'var(--paper-2)',
      lineHeight: 1
    }
  }, "Secure your seat"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px auto 0',
      maxWidth: '48ch',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 1.7,
      color: 'rgba(251,245,233,.92)'
    }
  }, "You\u2019ve been nominated \u2014 now claim your spot. Fill out the form below by ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--paper-2)'
    }
  }, "August 8"), " and we\u2019ll follow up with the details and next steps."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '40px',
      background: 'var(--paper-2)',
      borderRadius: 'var(--radius-lg)',
      padding: '16px',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    title: "A Founders Retreat RSVP form",
    src: GFORM,
    style: {
      width: '100%',
      height: '820px',
      border: 0,
      borderRadius: 'var(--radius-md)',
      background: 'var(--paper-2)'
    }
  }, "Loading\u2026")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '30px 0 0',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: '20px',
      color: 'var(--paper-2)'
    }
  }, "Come ready to share what you\u2019ve learned. Leave with ideas you couldn\u2019t have found on your own.")));
}

/* ---------- Footer ---------- */
function FooterBar() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink)',
      color: 'var(--paper-2)',
      padding: '52px 0 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: '34px'
    }
  }, "A Founders Retreat"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'rgba(251,245,233,.6)'
    }
  }, "October 2\u20135, 2026 \xB7 Carolina Coast \xB7 By invitation")));
}
function FRLanding() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Question, null), /*#__PURE__*/React.createElement(GatherDivider, null), /*#__PURE__*/React.createElement(Story, {
    id: "invited",
    eyebrow: "Why you were invited",
    title: "Someone believes you'll make the weekend better",
    img: P + 'garden-painting-class.webp',
    alt: "Working together outdoors",
    body: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0
      }
    }, "Every person attending has been personally nominated by one of our retreat leaders \u2014 because someone who knows the work you do believes you\u2019ll make the weekend better."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '18px 0 0'
      }
    }, "We\u2019re intentionally bringing together owners from different industries, experiences, and stages. Some have been building for years. Others are just beginning their next chapter."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '18px 0 0'
      }
    }, "The best groups aren\u2019t made of people who think alike \u2014 they\u2019re made of people generous enough to share what they\u2019ve learned and curious enough to ask for help."))
  }), /*#__PURE__*/React.createElement(PhotoBreak, {
    src: P + 'water-dusk.jpeg',
    alt: "The water at dusk",
    caption: "Everyone teaches. Everyone learns."
  }), /*#__PURE__*/React.createElement(Story, {
    id: "teach",
    eyebrow: "Everyone teaches, everyone learns",
    title: "You already know something someone else needs",
    flip: true,
    img: P + 'journaling-candles.png',
    alt: "Notebooks and candles on a wooden table",
    body: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0
      }
    }, "Everyone will share something that\u2019s helped them build \u2014 client acquisition, branding, content, partnerships, systems, pricing, or hard-won lessons. And everyone gets dedicated time to bring one of their biggest challenges to the group:"), /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: '20px 0 0',
        padding: 0,
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }
    }, ['The idea you\u2019ve been sitting on.', 'The offer that isn\u2019t converting.', 'The website that doesn\u2019t quite feel right.', 'The next step you can\u2019t see clearly.'].map((t, i) => /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        fontFamily: 'var(--font-serif)',
        fontStyle: 'italic',
        fontSize: '21px',
        color: 'var(--ink)',
        paddingLeft: '18px',
        borderLeft: '2px solid var(--ink)'
      }
    }, t))), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '20px 0 0'
      }
    }, "We\u2019ll ask questions, offer honest feedback, and help each other move forward."))
  }), /*#__PURE__*/React.createElement(Weekend, null), /*#__PURE__*/React.createElement(Who, null), /*#__PURE__*/React.createElement(Details, null), /*#__PURE__*/React.createElement(Stay, null), /*#__PURE__*/React.createElement(Before, null), /*#__PURE__*/React.createElement(RSVP, null), /*#__PURE__*/React.createElement(FooterBar, null));
}
window.FRLanding = FRLanding;
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/kit-home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/kit-home.jsx
try { (() => {
/* Founders Retreat — invitation landing page.
   Editorial one-page scroll built on the design-system components.
   Attaches window.FRLanding. */
const DS = window.TheFoundersEditDesignSystem_0cfd4a;
const {
  Button,
  Eyebrow,
  Tag,
  Ribbon,
  SectionHeading,
  Input,
  Select,
  Checkbox
} = DS;
const {
  useState,
  useRef
} = React;
const P = '../../assets/photos/';
const PR = '../../assets/portraits/';
const AIRBNB = 'https://www.airbnb.com/rooms/1208903670876748539?adults=15&check_in=2026-10-02&check_out=2026-10-05&guests=15';
const GFORM = 'https://docs.google.com/forms/d/e/1FAIpQLSdkhc1sxb-jko5rLag4RQfRqT17zy3yxjQU2fxCESkKlB6iCQ/viewform?embedded=true';
const WRAP = {
  maxWidth: '1120px',
  margin: '0 auto',
  padding: '0 40px'
};
const scrollToId = id => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({
    top: el.getBoundingClientRect().top + window.pageYOffset - 24,
    behavior: 'smooth'
  });
};

/* ---------- Nav ---------- */
function Nav() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(244,235,219,.86)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      height: '68px'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '30px'
    }
  }, [['The Weekend', 'weekend'], ['Who', 'who'], ['Details', 'details'], ['Stay', 'stay']].map(([l, id]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => scrollToId(id),
    style: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: '11px',
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: 'var(--ink)'
    }
  }, l)), /*#__PURE__*/React.createElement(Button, {
    variant: "sky",
    size: "sm",
    onClick: () => scrollToId('rsvp')
  }, "Secure your seat"))));
}

/* ---------- Hero ---------- */
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: 'calc(100vh - 68px)',
      display: 'flex',
      alignItems: 'flex-end',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + 'courtyard-table.webp',
    alt: "A long table set under the trees",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 30%',
      filter: 'saturate(.92) contrast(1.02)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(51,40,30,.30) 0%, rgba(51,40,30,.05) 40%, rgba(51,40,30,.62) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      position: 'relative',
      paddingBottom: '72px',
      paddingTop: '120px',
      color: 'var(--paper-2)',
      width: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      background: 'rgba(23,21,15,.55)',
      backdropFilter: 'blur(3px)',
      padding: '9px 18px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid rgba(250,248,243,.25)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "paper"
  }, "October 2\u20135, 2026 \xA0\xB7\xA0 By invitation only")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '20px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(58px, 11vw, 148px)',
      lineHeight: .9,
      letterSpacing: '-.025em'
    }
  }, "A Founders", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 400,
      letterSpacing: 0,
      color: 'var(--paper-2)',
      fontSize: 'clamp(52px,10vw,132px)'
    }
  }, "Retreat")), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '640px',
      margin: '26px 0 0',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'clamp(19px,2.4vw,26px)',
      lineHeight: 1.55,
      color: 'rgba(251,245,233,.94)'
    }
  }, "A collaborative weekend for women who own \u2014 and are actively growing \u2014 their businesses."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '34px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "sky",
    size: "lg",
    arrow: true,
    onClick: () => scrollToId('rsvp')
  }, "Secure your seat"))));
}

/* ---------- The big question ---------- */
function Question() {
  return /*#__PURE__*/React.createElement("section", {
    id: "weekend",
    style: {
      background: 'var(--paper)',
      padding: '110px 0 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: WRAP
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.35fr 1fr',
      gap: '56px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      maxWidth: '17ch',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(34px,5.2vw,68px)',
      lineHeight: 1.06,
      letterSpacing: '-.02em',
      color: 'var(--ink)',
      textWrap: 'balance'
    }
  }, "What if your next breakthrough came from someone sitting across the dinner table?"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-muted)',
      aspectRatio: '4/5',
      boxShadow: 'var(--shadow-frame)',
      transform: 'rotate(1.5deg)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + 'magazine-flatlay.jpeg',
    alt: "An editorial flatlay of notes and coffee",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'saturate(.92)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: '-22px',
      left: '-14px',
      fontFamily: 'var(--font-script)',
      fontSize: 'clamp(32px,4vw,52px)',
      color: 'var(--olive)',
      transform: 'rotate(-4deg)'
    }
  }, "let\u2019s find out"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '64px',
      marginTop: '56px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 1.75,
      color: 'var(--ink-2)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Owning a business is exciting, rewarding, and deeply personal. It can also be surprisingly lonely."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0'
    }
  }, "Most of us spend our days making decisions without anyone to bounce ideas off of. We celebrate wins quietly, second-guess ourselves, and spend hours solving problems someone else may have already figured out."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0'
    }
  }, "So we wanted to create the kind of weekend we all wish existed.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '14px'
    }
  }, ['Not a conference.', 'Not a networking event.', 'Not a room where one person teaches while everyone else listens.'].map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 'clamp(22px,3vw,30px)',
      color: 'var(--ink-3)',
      textDecoration: 'line-through',
      textDecorationColor: 'var(--sand-deep)',
      textDecorationThickness: '2px'
    }
  }, t))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '28px 0 0',
      fontFamily: 'var(--font-serif)',
      fontSize: '24px',
      lineHeight: 1.5,
      color: 'var(--ink)'
    }
  }, "A small group of thoughtful business owners coming together to share what they\u2019ve learned, ask for help where they\u2019re stuck, and build alongside one another."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0',
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 'var(--fs-body-lg)',
      color: 'var(--ink)'
    }
  }, "For one weekend, we\u2019ll bring our businesses together under one roof.")))));
}

/* ---------- Handwritten divider ---------- */
function GatherDivider() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--teal-wash)',
      padding: '58px 24px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 'clamp(46px,8vw,96px)',
      lineHeight: 1.05,
      color: 'var(--ink)'
    }
  }, "Gather. Learn. Build."));
}

/* ---------- Full-bleed photo break ---------- */
function PhotoBreak({
  src,
  alt,
  caption
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: '58vh',
      minHeight: '420px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'saturate(.92)'
    }
  }), caption && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(0deg, rgba(51,40,30,.5), transparent 55%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: '40px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 'clamp(22px,3vw,34px)',
      color: 'var(--paper-2)'
    }
  }, caption))));
}

/* ---------- Two-column story block ---------- */
function Story({
  id,
  eyebrow,
  title,
  body,
  img,
  alt,
  flip
}) {
  const text = /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '520px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: eyebrow,
    title: title
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '22px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 1.75,
      color: 'var(--ink-2)'
    }
  }, body));
  const image = /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden',
      border: '1px solid var(--border-muted)',
      aspectRatio: '4/5',
      boxShadow: 'var(--shadow-frame)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'saturate(.92)'
    }
  }));
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      background: 'var(--paper-2)',
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '72px',
      alignItems: 'center'
    }
  }, flip ? /*#__PURE__*/React.createElement(React.Fragment, null, image, text) : /*#__PURE__*/React.createElement(React.Fragment, null, text, image)));
}

/* ---------- What the weekend looks like ---------- */
function Weekend() {
  const bullets = ['Short sessions led by the business owners in the room', 'Collaborative problem-solving around real business challenges', 'Honest feedback on websites, branding, messaging, and offers', 'Time for headshots, product photography, and content creation', 'Shared meals and late-night conversations', 'Morning coffee, beach walks, and plenty of space to recharge'];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--paper)',
      padding: '100px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: WRAP
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What the weekend looks like",
    title: "Not your average networking event",
    lede: "Yes, there will be a few short talks \u2014 but mostly it\u2019s space for meaningful conversations, practical learning, and time to actually work on our businesses."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4px 48px',
      marginTop: '48px'
    }
  }, bullets.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: '18px',
      alignItems: 'baseline',
      padding: '20px 0',
      borderTop: '1px solid var(--border-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '18px',
      color: 'var(--ink-3)',
      minWidth: '28px'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 1.5,
      color: 'var(--ink)'
    }
  }, b)))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '44px 0 0',
      maxWidth: '54ch',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: '24px',
      lineHeight: 1.5,
      color: 'var(--ink-2)'
    }
  }, "Some of the most valuable conversations probably won\u2019t happen during a scheduled session. They\u2019ll happen over breakfast, on the porch, or while walking down the beach.")));
}

/* ---------- Who you'll meet ---------- */
function Who() {
  const fields = ['Photography', 'Product', 'Ecommerce', 'Travel', 'Wellness', 'Fitness', 'Content Creation', 'Creative Services', 'Brand Strategy', 'Community Building'];
  const leftPix = [PR + 'portrait-02.jpeg', PR + 'portrait-05.jpeg', PR + 'portrait-09.jpeg'];
  const rightPix = [PR + 'portrait-06.jpeg', PR + 'portrait-07.jpeg', PR + 'portrait-10.jpeg'];
  const col = (pix, edge) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '14px'
    }
  }, pix.map((src, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      overflow: 'hidden',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-muted)',
      aspectRatio: '4/5',
      transform: `rotate(${(edge === 'left' ? -1 : 1) * (i % 2 ? 1.4 : -1)}deg)`
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'saturate(.9) grayscale(.15)'
    }
  }))));
  return /*#__PURE__*/React.createElement("section", {
    id: "who"
  }, /*#__PURE__*/React.createElement(Ribbon, {
    text: "Different businesses \xB7 Different perspectives \xB7 One shared goal",
    tone: "ink",
    speed: 30
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper-2)',
      padding: '100px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1240px',
      margin: '0 auto',
      padding: '0 40px',
      display: 'grid',
      gridTemplateColumns: 'minmax(150px, 1fr) minmax(0, 2.1fr) minmax(150px, 1fr)',
      gap: '40px',
      alignItems: 'center'
    }
  }, col(leftPix, 'left'), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Who you'll meet",
    title: "We're keeping the guest list a surprise",
    align: "center",
    lede: "Every person has been carefully chosen for the perspective they bring and their willingness to contribute. Among the group, you'll find owners building in areas like:"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px',
      justifyContent: 'center',
      maxWidth: '620px',
      margin: '40px auto 0'
    }
  }, fields.map((f, i) => /*#__PURE__*/React.createElement(Tag, {
    key: i,
    tone: "ink"
  }, f)))), col(rightPix, 'right'))));
}

/* ---------- Where we'll stay ---------- */
function Stay() {
  return /*#__PURE__*/React.createElement("section", {
    id: "stay",
    style: {
      background: 'var(--paper)',
      padding: '100px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: WRAP
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Where we'll stay",
    title: "A beach house in Wilmington, NC",
    lede: "We'll share one roof for the weekend \u2014 an ocean-view great room for sessions, a long table for dinners, wraparound porches, and a firepit under string lights for the late-night conversations."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gridAutoRows: '128px',
      gap: '12px',
      marginTop: '44px'
    }
  }, /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      gridColumn: 'span 4',
      gridRow: 'span 3',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-muted)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + 'house-exterior.png',
    alt: "The beach house exterior",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: 'absolute',
      left: '18px',
      bottom: '16px',
      fontFamily: 'var(--font-script)',
      fontSize: '34px',
      color: 'var(--paper-2)',
      textShadow: '0 1px 12px rgba(23,21,15,.6)'
    }
  }, "Home for the weekend")), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 2',
      gridRow: 'span 2',
      overflow: 'hidden',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-muted)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + 'house-living.png',
    alt: "Ocean-view living and dining room",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 2',
      overflow: 'hidden',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-muted)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + 'house-firepit.png',
    alt: "The firepit at sunset",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 40%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 2',
      gridRow: 'span 2',
      overflow: 'hidden',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-muted)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + 'house-porch.png',
    alt: "The wraparound porch",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 2',
      gridRow: 'span 2',
      overflow: 'hidden',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-muted)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + 'house-bedroom.png',
    alt: "A light-filled bedroom",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 2',
      gridRow: 'span 2',
      overflow: 'hidden',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-muted)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + 'house-marsh.png',
    alt: "The marsh and gazebo out back",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '32px',
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    arrow: true,
    as: "a",
    href: AIRBNB,
    target: "_blank",
    rel: "noopener"
  }, "View the house on Airbnb"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: '18px',
      color: 'var(--ink-2)'
    }
  }, "Sleeps the whole group \xB7 Oct 2\u20135, 2026"))));
}

/* ---------- Details ---------- */
function Details() {
  const rows = [{
    k: 'When',
    v: 'October 2\u20135, 2026',
    n: 'Friday afternoon through Sunday.'
  }, {
    k: 'Where',
    v: 'A beach house in Wilmington, NC',
    n: 'On the Carolina coast \u2014 see \u201cWhere we\u2019ll stay\u201d below.'
  }, {
    k: 'Group size',
    v: 'Approximately 10\u201312',
    n: 'Kept small so everyone has a seat at the table.'
  }, {
    k: 'Cost',
    v: '$350 per person',
    n: 'Accommodations and shared meals, split evenly \u2014 not a paid retreat.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "details",
    style: {
      background: 'var(--teal-wash)',
      color: 'var(--ink)',
      padding: '100px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: WRAP
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "A few details",
    title: "The practical parts"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '48px',
      borderTop: '1.5px solid var(--ink)'
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '200px 1fr',
      gap: '32px',
      padding: '28px 0',
      borderBottom: '1px solid var(--border-muted)',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: '12px',
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: 'var(--ink-2)'
    }
  }, r.k), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(24px,3vw,34px)',
      lineHeight: 1.15,
      color: 'var(--ink)'
    }
  }, r.v), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '8px',
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      color: 'var(--ink-2)'
    }
  }, r.n)))))));
}

/* ---------- Before the weekend ---------- */
function Before() {
  const qs = ['What could you teach?', 'What\u2019s the biggest challenge you\u2019re working through?', 'What would you love to leave the weekend with?'];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--paper)',
      padding: '100px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      maxWidth: '860px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Before the weekend",
    title: "A short questionnaire",
    align: "center",
    lede: "We'll use your answers to shape the conversations and build the weekend around the people actually in the room. No two retreats should ever look the same."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '48px',
      display: 'flex',
      flexDirection: 'column',
      gap: '18px'
    }
  }, qs.map((q, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: '22px',
      alignItems: 'center',
      background: 'var(--paper-2)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      padding: '24px 28px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: '44px',
      color: 'var(--ink-3)',
      lineHeight: 1
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '24px',
      color: 'var(--ink)'
    }
  }, q))))));
}

/* ---------- RSVP ---------- */
function RSVP() {
  return /*#__PURE__*/React.createElement("section", {
    id: "rsvp",
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + 'pier-sunset.png',
    alt: "Under the pier at sunset",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'saturate(.9) brightness(.86)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(51,40,30,.55), rgba(51,40,30,.72))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      position: 'relative',
      maxWidth: '760px',
      padding: '110px 40px',
      textAlign: 'center',
      color: 'var(--paper-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 'clamp(40px,7vw,72px)',
      color: 'var(--paper-2)',
      lineHeight: 1
    }
  }, "Secure your seat"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px auto 0',
      maxWidth: '48ch',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 1.7,
      color: 'rgba(251,245,233,.92)'
    }
  }, "You\u2019ve been nominated \u2014 now claim your spot. Fill out the form below by ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--paper-2)'
    }
  }, "August 8"), " and we\u2019ll follow up with the details and next steps."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '40px',
      background: 'var(--paper-2)',
      borderRadius: 'var(--radius-lg)',
      padding: '16px',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    title: "A Founders Retreat RSVP form",
    src: GFORM,
    style: {
      width: '100%',
      height: '820px',
      border: 0,
      borderRadius: 'var(--radius-md)',
      background: 'var(--paper-2)'
    }
  }, "Loading\u2026")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '30px 0 0',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: '20px',
      color: 'var(--paper-2)'
    }
  }, "Come ready to share what you\u2019ve learned. Leave with ideas you couldn\u2019t have found on your own.")));
}

/* ---------- Footer ---------- */
function FooterBar() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink)',
      color: 'var(--paper-2)',
      padding: '52px 0 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: '34px'
    }
  }, "A Founders Retreat"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'rgba(251,245,233,.6)'
    }
  }, "October 2\u20135, 2026 \xB7 Carolina Coast \xB7 By invitation")));
}
function FRLanding() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Question, null), /*#__PURE__*/React.createElement(GatherDivider, null), /*#__PURE__*/React.createElement(Story, {
    id: "invited",
    eyebrow: "Why you were invited",
    title: "Someone believes you'll make the weekend better",
    img: P + 'garden-painting-class.webp',
    alt: "Working together outdoors",
    body: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0
      }
    }, "Every person attending has been personally nominated by one of our retreat leaders \u2014 because someone who knows the work you do believes you\u2019ll make the weekend better."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '18px 0 0'
      }
    }, "We\u2019re intentionally bringing together owners from different industries, experiences, and stages. Some have been building for years. Others are just beginning their next chapter."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '18px 0 0'
      }
    }, "The best groups aren\u2019t made of people who think alike \u2014 they\u2019re made of people generous enough to share what they\u2019ve learned and curious enough to ask for help."))
  }), /*#__PURE__*/React.createElement(PhotoBreak, {
    src: P + 'water-dusk.jpeg',
    alt: "The water at dusk",
    caption: "Everyone teaches. Everyone learns."
  }), /*#__PURE__*/React.createElement(Story, {
    id: "teach",
    eyebrow: "Everyone teaches, everyone learns",
    title: "You already know something someone else needs",
    flip: true,
    img: P + 'journaling-candles.png',
    alt: "Notebooks and candles on a wooden table",
    body: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0
      }
    }, "Everyone will share something that\u2019s helped them build \u2014 client acquisition, branding, content, partnerships, systems, pricing, or hard-won lessons. And everyone gets dedicated time to bring one of their biggest challenges to the group:"), /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: '20px 0 0',
        padding: 0,
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }
    }, ['The idea you\u2019ve been sitting on.', 'The offer that isn\u2019t converting.', 'The website that doesn\u2019t quite feel right.', 'The next step you can\u2019t see clearly.'].map((t, i) => /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        fontFamily: 'var(--font-serif)',
        fontStyle: 'italic',
        fontSize: '21px',
        color: 'var(--ink)',
        paddingLeft: '18px',
        borderLeft: '2px solid var(--ink)'
      }
    }, t))), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '20px 0 0'
      }
    }, "We\u2019ll ask questions, offer honest feedback, and help each other move forward."))
  }), /*#__PURE__*/React.createElement(Weekend, null), /*#__PURE__*/React.createElement(Who, null), /*#__PURE__*/React.createElement(Details, null), /*#__PURE__*/React.createElement(Stay, null), /*#__PURE__*/React.createElement(Before, null), /*#__PURE__*/React.createElement(RSVP, null), /*#__PURE__*/React.createElement(FooterBar, null));
}
window.FRLanding = FRLanding;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/kit-home.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.BlogCard = __ds_scope.BlogCard;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Ribbon = __ds_scope.Ribbon;

__ds_ns.Tag = __ds_scope.Tag;

})();
