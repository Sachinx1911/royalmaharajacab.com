export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* yellow pin head */}
      <circle cx="256" cy="232" r="184" fill="#FFC907" />
      {/* roof + windshield frame */}
      <path
        d="M150 256 C 158 178 198 142 256 142 C 314 142 354 178 362 256 Z"
        fill="#272B33"
      />
      {/* windshield */}
      <path
        d="M176 244 C 186 196 214 172 256 172 C 298 172 326 196 336 244 Z"
        fill="#FFFFFF"
      />
      {/* side mirrors */}
      <ellipse cx="128" cy="266" rx="30" ry="16" fill="#272B33" />
      <ellipse cx="384" cy="266" rx="30" ry="16" fill="#272B33" />
      {/* body tapering to pin tip */}
      <path
        d="M146 252 L 366 252 L 414 332 C 396 422 300 464 256 500 C 212 464 116 422 98 332 Z"
        fill="#272B33"
      />
      {/* headlights */}
      <rect x="160" y="298" width="66" height="38" rx="19" fill="#FFFFFF" />
      <rect x="286" y="298" width="66" height="38" rx="19" fill="#FFFFFF" />
    </svg>
  );
}
