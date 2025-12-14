import { ChevronDown, ChevronUp } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-[234px] h-screen flex-shrink-0 border-r border-neutral-200 bg-neutral-050 flex flex-col">
      {/* Logo Header */}
      <div className="h-[52px] border-b border-neutral-200 bg-white flex items-center justify-between px-[18px]">
        <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.0622 0C14.24 0 14.4147 0.0460062 14.5674 0.131673C14.7201 0.218926 14.8475 0.342667 14.9341 0.493377L22.8725 14.1794C22.9559 14.3238 23 14.4856 23 14.6522C23 14.8172 22.9559 14.9806 22.8725 15.1249L20.3324 19.505C20.2458 19.6542 20.1199 19.7795 19.9657 19.8667C19.813 19.954 19.6383 20 19.4604 20H3.53798C3.36013 20 3.18544 19.954 3.03278 19.8667C2.88012 19.7795 2.75263 19.6542 2.66607 19.505L0.127481 15.1249C0.0440676 14.9806 0 14.8172 0 14.6522C0 14.4872 0.0440676 14.3238 0.127481 14.1794L8.06432 0.493377C8.15088 0.344253 8.27836 0.218926 8.43103 0.131673C8.58369 0.0444198 8.75838 0 8.93623 0H14.0622ZM5.98214 15.1186C5.98214 15.1186 9.2085 12.9325 11.4984 12.9325C13.7884 12.9325 17.0147 15.1186 17.0147 15.1186L11.4984 5.46046L5.98214 15.1186Z" fill="#1D293D"/>
        </svg>
        <button className="min-w-8 min-h-8 flex items-center justify-center rounded hover:bg-neutral-50">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.25 2.25H15.75C16.1642 2.25 16.5 2.58579 16.5 3V15C16.5 15.4142 16.1642 15.75 15.75 15.75H2.25C1.83579 15.75 1.5 15.4142 1.5 15V3C1.5 2.58579 1.83579 2.25 2.25 2.25ZM6 3.75H3V14.25H6V3.75ZM7.5 3.75V14.25H15V3.75H7.5Z" fill="#45556C"/>
          </svg>
        </button>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col w-[210px] mx-3 mt-1.5 gap-0.5">
        <MenuItem icon={<BarChartIcon />} label="대시보드" hasDropdown />
        <MenuItem icon={<UserIcon />} label="계정" hasDropdown />
        <MenuItemExpanded icon={<BuildingIcon />} label="조직" isActive>
          <SubMenuItem label="법인 사용 설정" isActive />
          <SubMenuItem label="사용자 정의 설정" />
        </MenuItemExpanded>
        <MenuItem icon={<MessageIcon />} label="에이전트" hasDropdown />
        <MenuItem icon={<ChatHistoryIcon />} label="로그" hasDropdown />
        <MenuItem icon={<SettingsIcon />} label="시스템" hasDropdown />
        <MenuItem icon={<QuestionIcon />} label="지원" hasDropdown />
      </div>
    </div>
  );
}

function MenuItem({ icon, label, hasDropdown }: { icon: React.ReactNode; label: string; hasDropdown?: boolean }) {
  return (
    <div className="flex items-center justify-between px-2.5 py-[11px] rounded hover:bg-white/50 cursor-pointer">
      <div className="flex items-center gap-1.5">
        {icon}
        <span className="text-sm font-bold text-text-secondary">{label}</span>
      </div>
      {hasDropdown && <ChevronDown className="w-[18px] h-[18px] text-text-tertiary" />}
    </div>
  );
}

function MenuItemExpanded({ icon, label, isActive, children }: { icon: React.ReactNode; label: string; isActive?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <div className={`flex items-center justify-between px-2.5 py-[11px] rounded cursor-pointer ${isActive ? 'bg-white/50' : ''}`}>
        <div className="flex items-center gap-1.5">
          {icon}
          <span className={`text-sm font-bold ${isActive ? 'text-primary' : 'text-text-secondary'}`}>{label}</span>
        </div>
        <ChevronUp className="w-[18px] h-[18px] text-text-tertiary" />
      </div>
      <div className="flex flex-col items-end mt-0.5">
        {children}
      </div>
    </div>
  );
}

function SubMenuItem({ label, isActive }: { label: string; isActive?: boolean }) {
  return (
    <div className="flex items-start w-48 h-[34px] pl-px gap-[11px]">
      <div className={`w-px h-full ${isActive ? 'bg-primary' : 'bg-neutral-400'}`} />
      <div className={`flex items-center h-full px-2 rounded ${isActive ? 'border border-neutral-200 shadow-sm' : ''} flex-1`}>
        <span className={`text-xs font-bold leading-[18px] ${isActive ? 'text-primary' : 'text-neutral-400'}`}>{label}</span>
      </div>
    </div>
  );
}

// Icons
function BarChartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.25 2.25H15.75C16.1642 2.25 16.5 2.58579 16.5 3V15C16.5 15.4142 16.1642 15.75 15.75 15.75H2.25C1.83579 15.75 1.5 15.4142 1.5 15V3C1.5 2.58579 1.83579 2.25 2.25 2.25ZM3 3.75V14.25H15V3.75H3ZM5.25 9.75H6.75V12.75H5.25V9.75ZM8.25 5.25H9.75V12.75H8.25V5.25ZM11.25 7.5H12.75V12.75H11.25V7.5Z" fill="#45556C"/>
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 16.5H13.5V15C13.5 13.7573 12.4927 12.75 11.25 12.75H6.75C5.50736 12.75 4.5 13.7573 4.5 15V16.5H3V15C3 12.929 4.67893 11.25 6.75 11.25H11.25C13.321 11.25 15 12.929 15 15V16.5ZM9 9.75C6.51472 9.75 4.5 7.73527 4.5 5.25C4.5 2.76472 6.51472 0.75 9 0.75C11.4853 0.75 13.5 2.76472 13.5 5.25C13.5 7.73527 11.4853 9.75 9 9.75ZM9 8.25C10.6568 8.25 12 6.90686 12 5.25C12 3.59314 10.6568 2.25 9 2.25C7.34314 2.25 6 3.59314 6 5.25C6 6.90686 7.34314 8.25 9 8.25Z" fill="#45556C"/>
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.75 14.25H17.25V15.75H0.75V14.25H2.25V3C2.25 2.58579 2.58579 2.25 3 2.25H10.5C10.9142 2.25 11.25 2.58579 11.25 3V14.25H14.25V8.25H12.75V6.75H15C15.4142 6.75 15.75 7.08579 15.75 7.5V14.25ZM3.75 3.75V14.25H9.75V3.75H3.75ZM5.25 8.25H8.25V9.75H5.25V8.25ZM5.25 5.25H8.25V6.75H5.25V5.25Z" fill="#1447E6"/>
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.9993 2.25001C14.4848 2.25001 16.5 4.27142 16.5 6.74562V15.75H6.00074C3.5152 15.75 1.50001 13.7286 1.50001 11.2544V8.25005H3.00001V11.2544C3.00001 12.9032 4.3466 14.25 6.00074 14.25H15V6.74562C15 5.09687 13.6534 3.75001 11.9993 3.75001H7.5V2.25001H11.9993ZM7.5 9.75005H6.00002V8.25005H7.5V9.75005ZM12 9.75005H10.5V8.25005H12V9.75005ZM2.64698 0.989506C2.77938 0.670164 3.22063 0.670165 3.35303 0.989506L3.54273 1.448C3.86666 2.2301 4.47116 2.85464 5.23096 3.19264L5.7693 3.43214C6.07701 3.56925 6.07697 4.01716 5.7693 4.15431L5.19947 4.40773C4.45874 4.73719 3.86504 5.3396 3.53541 6.09596L3.35011 6.52004C3.21477 6.83063 2.78525 6.83063 2.64991 6.52004L2.4646 6.09596C2.13496 5.33961 1.54129 4.73719 0.800542 4.40773L0.230717 4.15431C-0.0768878 4.01716 -0.0769237 3.56925 0.230717 3.43214L0.76905 3.19264C1.52884 2.85464 2.13335 2.23012 2.45729 1.448L2.64698 0.989506Z" fill="#45556C"/>
    </svg>
  );
}

function ChatHistoryIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 1.5C13.1421 1.5 16.5 4.85786 16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C7.7235 16.5 6.52144 16.1811 5.46922 15.6186L1.5 16.5L2.38222 12.5323C1.81922 11.4797 1.5 10.2771 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5ZM9 3C5.68629 3 3 5.68629 3 9C3 10.001 3.24422 10.9636 3.7049 11.8248L3.96714 12.3151L3.47584 14.5247L5.68642 14.0338L6.17638 14.2958C7.03736 14.756 7.99942 15 9 15C12.3137 15 15 12.3137 15 9C15 5.68629 12.3137 3 9 3ZM9.75 5.25V9H12.75V10.5H8.25V5.25H9.75Z" fill="#45556C"/>
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.50508 12.7503C2.18089 12.1887 1.93756 11.6028 1.77148 11.0057C2.50084 10.6335 3.00028 9.87522 3.00028 9.00027C3.00028 8.126 2.50159 7.36812 1.77313 6.99568C2.10817 5.7875 2.74441 4.66232 3.64904 3.74263C4.33601 4.18824 5.2425 4.24163 6.00028 3.80412C6.75805 3.36662 7.16506 2.55488 7.12264 1.73715C8.37146 1.41357 9.66401 1.42515 10.8778 1.73909C10.8361 2.55617 11.2431 3.36696 12.0003 3.80412C12.7581 4.24161 13.6645 4.18824 14.3514 3.74267C14.7855 4.18502 15.1713 4.68875 15.4955 5.25028C15.8196 5.8118 16.063 6.39781 16.2291 6.99483C15.4997 7.36697 15.0003 8.12532 15.0003 9.00027C15.0003 9.87462 15.4989 10.6324 16.2274 11.0049C15.8924 12.213 15.2562 13.3382 14.3515 14.2579C13.6645 13.8123 12.7581 13.7589 12.0003 14.1964C11.2425 14.6339 10.8355 15.4457 10.8779 16.2634C9.62914 16.587 8.33659 16.5754 7.12273 16.2615C7.16442 15.4443 6.75745 14.6336 6.00028 14.1964C5.24252 13.7589 4.33608 13.8123 3.64912 14.2578C3.21511 13.8155 2.82928 13.3118 2.50508 12.7503ZM6.75028 12.8974C7.56881 13.37 8.15666 14.1171 8.43821 14.9745C8.81194 15.0101 9.18814 15.0106 9.56194 14.9757C9.84334 14.1179 10.4313 13.3702 11.2503 12.8974C12.0692 12.4245 13.0107 12.2892 13.8944 12.4744C14.1114 12.1681 14.2991 11.842 14.4552 11.5006C13.8534 10.8281 13.5003 9.94542 13.5003 9.00027C13.5003 8.05512 13.8534 7.17252 14.4552 6.5C14.3771 6.3305 14.2908 6.16379 14.1964 6.00028C14.102 5.83676 14.0007 5.67873 13.893 5.52644C13.0098 5.71119 12.0688 5.57573 11.2503 5.10316C10.4317 4.63058 9.84394 3.88338 9.56231 3.02603C9.18866 2.99048 8.81239 2.98997 8.43866 3.02481C8.15719 3.88265 7.56919 4.63035 6.75028 5.10316C5.93134 5.57597 4.98982 5.71133 4.1062 5.52614C3.88912 5.83243 3.70146 6.1585 3.54541 6.4999C4.14709 7.17245 4.50028 8.05512 4.50028 9.00027C4.50028 9.94542 4.14711 10.828 3.54541 11.5005C3.62349 11.67 3.70972 11.8368 3.80413 12.0003C3.89853 12.1638 3.99979 12.3218 4.10758 12.4741C4.99081 12.2894 5.93177 12.4248 6.75028 12.8974ZM9.00026 11.2503C7.75766 11.2503 6.75028 10.2429 6.75028 9.00027C6.75028 7.75767 7.75766 6.75028 9.00026 6.75028C10.2429 6.75028 11.2503 7.75767 11.2503 9.00027C11.2503 10.2429 10.2429 11.2503 9.00026 11.2503ZM9.00026 9.75027C9.41449 9.75027 9.75026 9.4145 9.75026 9.00027C9.75026 8.58605 9.41449 8.25027 9.00026 8.25027C8.58604 8.25027 8.25026 8.58605 8.25026 9.00027C8.25026 9.4145 8.58604 9.75027 9.00026 9.75027Z" fill="#45556C"/>
    </svg>
  );
}

function QuestionIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.09091 11.25L0.75 13.875V2.25C0.75 1.83579 1.08579 1.5 1.5 1.5H12.75C13.1642 1.5 13.5 1.83579 13.5 2.25V11.25H4.09091ZM3.57211 9.75H12V3H2.25V10.7888L3.57211 9.75ZM6 12.75H13.6779L15 13.7888V6H15.75C16.1642 6 16.5 6.33579 16.5 6.75V16.875L13.1591 14.25H6.75C6.33579 14.25 6 13.9142 6 13.5V12.75Z" fill="#45556C"/>
    </svg>
  );
}
