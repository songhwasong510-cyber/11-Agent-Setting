export default function Header() {
  return (
    <div className="h-[52px] border-b border-neutral-200 bg-white flex items-center justify-end px-5 gap-1">
      {/* Notification */}
      <button className="flex items-center gap-0.5 p-2 rounded hover:bg-neutral-50">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 12.75H16.5V14.25H1.5V12.75H3V7.5C3 4.18629 5.68629 1.5 9 1.5C12.3137 1.5 15 4.18629 15 7.5V12.75ZM13.5 12.75V7.5C13.5 5.01472 11.4853 3 9 3C6.51472 3 4.5 5.01472 4.5 7.5V12.75H13.5ZM6.75 15.75H11.25V17.25H6.75V15.75Z" fill="#45556C"/>
        </svg>
        <span className="inline-flex items-center justify-center px-1.5 min-w-[20px] h-[18px] rounded-full bg-[#E7000B] text-white text-xs font-normal leading-[18px]">
          10
        </span>
      </button>

      {/* File List Icon */}
      <button className="min-w-8 min-h-8 flex items-center justify-center rounded hover:bg-neutral-50">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.25 16.5H3.75C2.50736 16.5 1.5 15.4927 1.5 14.25V2.25C1.5 1.83579 1.83579 1.5 2.25 1.5H12.75C13.1642 1.5 13.5 1.83579 13.5 2.25V11.25H16.5V14.25C16.5 15.4927 15.4927 16.5 14.25 16.5ZM13.5 12.75V14.25C13.5 14.6642 13.8358 15 14.25 15C14.6642 15 15 14.6642 15 14.25V12.75H13.5ZM12 15V3H3V14.25C3 14.6642 3.33579 15 3.75 15H12ZM4.5 5.25H10.5V6.75H4.5V5.25ZM4.5 8.25H10.5V9.75H4.5V8.25ZM4.5 11.25H8.25V12.75H4.5V11.25Z" fill="#45556C"/>
        </svg>
      </button>

      {/* Message Icon */}
      <button className="min-w-8 min-h-8 flex items-center justify-center rounded hover:bg-neutral-50">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.9993 2.25001C14.4848 2.25001 16.5 4.27142 16.5 6.74562V15.75H6.00074C3.5152 15.75 1.50001 13.7286 1.50001 11.2544V8.25005H3.00001V11.2544C3.00001 12.9032 4.3466 14.25 6.00074 14.25H15V6.74562C15 5.09687 13.6534 3.75001 11.9993 3.75001H7.5V2.25001H11.9993ZM7.5 9.75005H6.00002V8.25005H7.5V9.75005ZM12 9.75005H10.5V8.25005H12V9.75005ZM2.64698 0.989506C2.77938 0.670164 3.22063 0.670165 3.35303 0.989506L3.54273 1.448C3.86666 2.2301 4.47116 2.85464 5.23096 3.19264L5.7693 3.43214C6.07701 3.56925 6.07697 4.01716 5.7693 4.15431L5.19947 4.40773C4.45874 4.73719 3.86504 5.3396 3.53541 6.09596L3.35011 6.52004C3.21477 6.83063 2.78525 6.83063 2.64991 6.52004L2.4646 6.09596C2.13496 5.33961 1.54129 4.73719 0.800542 4.40773L0.230717 4.15431C-0.0768878 4.01716 -0.0769237 3.56925 0.230717 3.43214L0.76905 3.19264C1.52884 2.85464 2.13335 2.23012 2.45729 1.448L2.64698 0.989506Z" fill="#45556C"/>
        </svg>
      </button>

      {/* User Avatar */}
      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded hover:bg-neutral-50 cursor-pointer">
        <div className="w-8 h-8 rounded-full border border-neutral-200 bg-white flex items-center justify-center">
          <span className="text-sm font-normal text-text-secondary">GD</span>
        </div>
        <span className="text-sm font-bold text-text-secondary">홍길동</span>
      </div>
    </div>
  );
}
