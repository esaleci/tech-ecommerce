export function ProgressBadge({
    value = 85,
    labelValue = 56,
    labelText = "Performance Progress",
  }: {
    value?: number;
    labelValue?: number;
    labelText?: string;
  }) {
    // Geometry
    const size = 160;
    const cx = size / 2;
    const cy = size / 2;
    const rOuter = 92;
    const rInner = 68;
  
    const clamp = (n: number) => Math.max(0, Math.min(100, n));
  
    // Circumferences
    const cOuter = 2 * Math.PI * rOuter;
    const cInner = 2 * Math.PI * rInner;
  
    // Main ring (outer) is full circle. Inner ring is partial arc.
    // For inner, we intentionally use a smaller fraction to match your screenshot style.
    const innerFrac = clamp(value) / 100;
  
    return (
      <div style={{ width: size, userSelect: "none" }}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          role="img"
          aria-label={`${value}%`}
        >
          {/* Outer ring background */}
          <circle
            cx={cx}
            cy={cy}
            r={rOuter}
            fill="none"
            stroke="#D9CCFF"
            strokeWidth="18"
            strokeLinecap="round"
          />
  
          {/* Inner white spacer ring */}
          <circle
            cx={cx}
            cy={cy}
            r={rOuter - 22}
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="18"
          />
  
          {/* Inner ring background (very light) */}
          <circle
            cx={cx}
            cy={cy}
            r={rInner}
            fill="none"
            stroke="#F3E8FF"
            strokeWidth="16"
            strokeLinecap="round"
          />
  
          {/* Inner progress arc (pink) */}
          <circle
            cx={cx}
            cy={cy}
            r={rInner}
            fill="none"
            stroke="#FFC2E6"
            strokeWidth="16"
            strokeLinecap="round"
            strokeDasharray={`${cInner * 0.78} ${cInner}`}
            strokeDashoffset={cInner * (0.18 - innerFrac * 0.12)}
            transform={`rotate(-90 ${cx} ${cy})`}
          />
  
          {/* Center circle */}
          <circle cx={cx} cy={cy} r={54} fill="#7B49FF" />
  
          {/* Center text */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial"
            fontSize="56"
            fontWeight="700"
            fill="#FFFFFF"
          >
            {clamp(value)}%
          </text>
        </svg>
  
        {/* Label under */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 10,
            marginTop: 10,
            justifyContent: "flex-start",
          }}
        >
          <span
            style={{
              color: "#FF6FB6",
              fontWeight: 800,
              fontSize: 28,
              fontFamily:
                "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial",
            }}
          >
            {clamp(labelValue)}%
          </span>
          <span
            style={{
              color: "#111827",
              fontWeight: 500,
              fontSize: 22,
              fontFamily:
                "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial",
            }}
          >
            {labelText}
          </span>
        </div>
      </div>
    );
  }
  