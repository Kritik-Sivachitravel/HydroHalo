// Reusable HydraHalo logo — water drop with halo on top
interface Props {
  size?: number;
}
export default function HydraLogo({ size = 36 }: Props) {
  const id = `logo-${size}`;
  return (
    <svg width={size} height={size} viewBox="0 0 48 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Halo — ellipse arc sitting above the drop */}
      <ellipse
        cx="24" cy="10"
        rx="15" ry="5.5"
        fill="none"
        stroke={`url(#halo-${id})`}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Shine dots on halo */}
      <circle cx="10" cy="10" r="1.2" fill="rgba(0,200,240,0.55)" />
      <circle cx="38" cy="10" r="1.2" fill="rgba(0,200,240,0.55)" />

      {/* Drop body */}
      <path
        d="M24 15 C24 15 11 30 11 38.5 C11 45.5 17 51 24 51 C31 51 37 45.5 37 38.5 C37 30 24 15 24 15Z"
        fill={`url(#drop-${id})`}
      />
      {/* Inner specular */}
      <ellipse cx="19.5" cy="31" rx="3" ry="6.5" fill="rgba(255,255,255,0.2)" transform="rotate(-18 19.5 31)" />

      <defs>
        <linearGradient id={`halo-${id}`} x1="9" y1="10" x2="39" y2="10" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#00c8f0" stopOpacity="0.25" />
          <stop offset="35%"  stopColor="#00c8f0" stopOpacity="0.9" />
          <stop offset="65%"  stopColor="#00c8f0" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#00c8f0" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id={`drop-${id}`} x1="11" y1="15" x2="37" y2="51" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#80eeff" />
          <stop offset="55%"  stopColor="#00a8d0" />
          <stop offset="100%" stopColor="#00567a" />
        </linearGradient>
      </defs>
    </svg>
  );
}
