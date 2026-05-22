export default function IowaGisLayers() {
  return (
    <svg width="210" height="175" viewBox="0 0 260 210" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ flexShrink: 0 }}>
      <defs>
        <clipPath id="cB"><polygon points="130,154 240,179 130,204 20,179" /></clipPath>
        <clipPath id="cL"><polygon points="130,120 240,145 130,170 20,145" /></clipPath>
        <clipPath id="cC"><polygon points="130,86 240,111 130,136 20,111" /></clipPath>
      </defs>

      {/* BASEMAP */}
      <polygon points="130,154 240,179 130,204 20,179" fill="#F0EAD6" />
      <polygon points="138,159 218,178 240,179 232,200 238,206 130,204 20,179 26,169 20,159 37,154 37,145 43,143 43,132 130,154"
        fill="#E4DCC8" stroke="#C4B89A" strokeWidth="1" clipPath="url(#cB)" />
      <path d="M148,164 Q154,171 151,180 Q148,188 151,197" stroke="#7AAEC8" strokeWidth="1.5" fill="none" clipPath="url(#cB)" />
      <path d="M237,157 Q240,168 240,179 Q239,190 237,198" stroke="#5A9EC0" strokeWidth="2" fill="none" clipPath="url(#cB)" />
      <circle cx="157" cy="179" r="2.5" fill="#D04040" clipPath="url(#cB)" />
      <circle cx="193" cy="173" r="2" fill="#D04040" clipPath="url(#cB)" />
      <circle cx="208" cy="170" r="1.8" fill="#D04040" clipPath="url(#cB)" />
      <circle cx="78" cy="177" r="1.8" fill="#D04040" clipPath="url(#cB)" />
      <polygon points="20,179 20,186 130,211 130,204" fill="#C4B89A" />
      <polygon points="240,179 240,186 130,211 130,204" fill="#D4C8B0" />

      {/* LAND USE */}
      <polygon points="130,120 240,145 130,170 20,145" fill="#C8E0A0" />
      <polygon points="138,125 218,144 240,145 232,166 238,172 130,170 20,145 26,135 20,125 37,120 37,111 43,109 43,98 130,120"
        fill="#C0D888" clipPath="url(#cL)" />
      <polygon points="44,132 72,139 61,148 33,141" fill="#5A9840" clipPath="url(#cL)" />
      <polygon points="194,119 222,127 212,136 184,128" fill="#6AAA50" clipPath="url(#cL)" />
      <polygon points="182,129 210,137 199,146 171,138" fill="#78B458" clipPath="url(#cL)" />
      <ellipse cx="153" cy="141" rx="7" ry="3" fill="#78B8D8" transform="rotate(-10,153,141)" clipPath="url(#cL)" />
      <polygon points="148,133 160,137 155,143 143,139" fill="#C0B8B0" clipPath="url(#cL)" />
      <polygon points="189,126 200,130 196,136 185,132" fill="#C0B8B0" clipPath="url(#cL)" />
      <polygon points="20,145 20,152 130,177 130,170" fill="#80B055" />
      <polygon points="240,145 240,152 130,177 130,170" fill="#90C065" />

      {/* COUNTIES */}
      <polygon points="130,86 240,111 130,136 20,111" fill="#EAE4F4" />
      <line x1="46" y1="98" x2="226" y2="124" stroke="#9880C8" strokeWidth="0.6" clipPath="url(#cC)" />
      <line x1="42" y1="106" x2="222" y2="130" stroke="#9880C8" strokeWidth="0.6" clipPath="url(#cC)" />
      <line x1="63" y1="91" x2="43" y2="135" stroke="#9880C8" strokeWidth="0.6" clipPath="url(#cC)" />
      <line x1="84" y1="94" x2="64" y2="136" stroke="#9880C8" strokeWidth="0.6" clipPath="url(#cC)" />
      <line x1="105" y1="97" x2="85" y2="136" stroke="#9880C8" strokeWidth="0.6" clipPath="url(#cC)" />
      <line x1="126" y1="87" x2="106" y2="136" stroke="#9880C8" strokeWidth="0.6" clipPath="url(#cC)" />
      <line x1="147" y1="84" x2="127" y2="136" stroke="#9880C8" strokeWidth="0.6" clipPath="url(#cC)" />
      <line x1="168" y1="82" x2="148" y2="133" stroke="#9880C8" strokeWidth="0.6" clipPath="url(#cC)" />
      <line x1="189" y1="80" x2="169" y2="131" stroke="#9880C8" strokeWidth="0.6" clipPath="url(#cC)" />
      <line x1="210" y1="78" x2="190" y2="128" stroke="#9880C8" strokeWidth="0.6" clipPath="url(#cC)" />
      <polygon points="138,91 218,110 240,111 232,132 238,138 130,136 20,111 26,101 20,91 37,86 37,77 43,75 43,64 130,86"
        fill="none" stroke="#6050A0" strokeWidth="1.2" clipPath="url(#cC)" />
      <polygon points="20,111 20,118 130,143 130,136" fill="#8878C0" />
      <polygon points="240,111 240,118 130,143 130,136" fill="#9888D0" />
    </svg>
  )
}
