import { useState, useRef, useEffect } from "react";
import { Check, X } from "lucide-react";
import svgPaths from "../../imports/DesktopWorkspacesInsideAWorkspaceAssetSelected/svg-qymjkh6ysf";
import imgAvatar from "../../imports/DesktopWorkspacesInsideAWorkspaceAssetSelected/170fd91896b84c6c4b682e5357bf92468c9db27c.png";
import imgImage from "../../imports/DesktopWorkspacesInsideAWorkspaceAssetSelected/2d2f26fb862438064d86b838427b57762975894a.png";
import imgImage1 from "../../imports/DesktopWorkspacesInsideAWorkspaceAssetSelected/235c64cd9a691d27206a410ab480dfa521485679.png";
import imgImage2 from "../../imports/DesktopWorkspacesInsideAWorkspaceAssetSelected/90da07f9eb805e0fa5b7937d6c2ba570e3eca966.png";
import imgImage3 from "../../imports/DesktopWorkspacesInsideAWorkspaceAssetSelected/dd132876ca0268108e12a97aac5d80eac80f623c.png";
import imgImage4 from "../../imports/DesktopWorkspacesInsideAWorkspaceAssetSelected/4e493604a527a83daf80b705f90532f11a4a170c.png";
import docSvgPaths from "../../imports/Document/svg-0gqw7f7baf";
import cardHoverSvgPaths from "../../imports/Card-1/svg-5mqjz2nk3i";
import bodySvgPaths from "../../imports/Body/svg-21x7hwr478";
import dropdownSvgPaths from "../../imports/DropdownOpen/svg-hpl4u82jcj";

// ─── Types ────────────────────────────────────────────────────────────────────

interface CardData {
  id: string;
  image: string;
}

interface FolderData {
  id: number;
  name: string;
  assets: CardData[];
}

interface MoveDropdownState {
  assetId: string;
  x: number;
  y: number;
}

// ─── Navigation ──────────────────────────────────────────────────────────────

function Logo() {
  return (
    <div className="h-[21.785px] relative shrink-0 w-[36.889px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.8887 21.7852">
        <g id="Logo">
          <path d={svgPaths.p16826000} fill="#1E1E1E" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Wediatransfer() {
  return (
    <div className="h-[13px] relative shrink-0 w-[125.082px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 125.082 13">
        <g clipPath="url(#clip0_nav)">
          <path d={svgPaths.p8f68780} fill="#5F34D5" id="Union" />
        </g>
        <defs>
          <clipPath id="clip0_nav">
            <rect fill="white" height="13" width="125.082" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Navigation() {
  return (
    <div className="bg-white flex h-[72px] items-center justify-between px-[40px] py-[12px] shrink-0 sticky top-0 w-full z-10">
      <Logo />
      <div className="flex gap-[24px] items-center justify-end shrink-0">
        <Wediatransfer />
        <div className="flex h-[24px] items-center justify-center shrink-0 w-0">
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[24px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 1">
                  <line stroke="#E4E4E4" x2="24" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-[24px] items-center not-italic shrink-0 text-[#1e1e1e] text-[16px] text-center whitespace-nowrap" style={{ fontFamily: "'Satoshi-Medium', sans-serif", fontWeight: 500 }}>
          <p>{`Boards & Portals`}</p>
          <p>Upload assets</p>
          <p>Workspaces</p>
        </div>
        <div className="flex h-[24px] items-center justify-center shrink-0 w-0">
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[24px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 1">
                  <line stroke="#E4E4E4" x2="24" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-[16px] items-center justify-end shrink-0">
          <div className="overflow-clip relative shrink-0 size-[24px]">
            <div className="absolute inset-[0_6.23%_0_6.25%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.0047 24">
                <path d={svgPaths.p395b8a00} fill="#1E1E1E" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]">
            <div className="absolute inset-[15.6%_6.25%_15.65%_6.25%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 16.5">
                <path d={svgPaths.p21562f00} fill="#1E1E1E" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── More Actions Dropdown ────────────────────────────────────────────────────

interface DropdownMenuProps {
  dropdownRef: React.RefObject<HTMLDivElement>;
  buttonRef: React.RefObject<HTMLDivElement>;
  onAddFolder?: () => void;
}

function DropdownMenu({ dropdownRef, buttonRef, onAddFolder }: DropdownMenuProps) {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({ top: rect.bottom + 6, left: rect.right - 200 });
    }
  }, [buttonRef]);

  const staticItems = [
    { label: "Publish assets", disabled: false, onClick: undefined as (() => void) | undefined },
    { label: "Add new folder", disabled: !onAddFolder, onClick: onAddFolder },
    { label: "Ask for approval", disabled: true, onClick: undefined as (() => void) | undefined },
  ];

  return (
    <div
      ref={dropdownRef}
      className="fixed bg-white flex flex-col gap-[4px] items-start p-[4px] rounded-[4px] w-[200px] z-50 shadow-[0px_5px_15px_0px_rgba(30,30,30,0.1)] border border-[#e4e4e4]"
      style={{ top: position.top, left: position.left }}
    >
      {staticItems.map((item) => (
        <div
          key={item.label}
          onClick={item.disabled ? undefined : item.onClick}
          className={`h-[36px] relative rounded-[3px] shrink-0 w-full transition-colors ${item.disabled ? "cursor-not-allowed" : "hover:bg-[#f5f5f5] cursor-pointer"}`}
        >
          <div className="flex items-center size-full px-[10px]">
            <span className={`font-['Satoshi-Medium',sans-serif] text-[14px] ${item.disabled ? "text-[#949494]" : "text-[#1e1e1e]"}`}>{item.label}</span>
          </div>
        </div>
      ))}
      <div className="h-[36px] relative rounded-[3px] shrink-0 w-full hover:bg-[#f5f5f5] transition-colors cursor-pointer">
        <div className="flex items-center size-full px-[10px] gap-[4px]">
          <span className="font-['Satoshi-Medium',sans-serif] text-[#1e1e1e] text-[14px]">Approval mode </span>
          <span className="font-['Satoshi-Medium',sans-serif] text-[#1b55f5] text-[14px]">(4)</span>
        </div>
      </div>
    </div>
  );
}

// ─── Add to Folder Dropdown ───────────────────────────────────────────────────

interface AddToFolderDropdownProps {
  folders: FolderData[];
  currentFolderId: number | null;
  position: { x: number; y: number };
  onSelect: (destination: number | null) => void;
  onCreateFolder: () => void;
  onClose: () => void;
}

function AddToFolderDropdown({ folders, currentFolderId, position, onSelect, onCreateFolder, onClose }: AddToFolderDropdownProps) {
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(position);

  // Smart positioning: keep inside viewport
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      let x = position.x;
      let y = position.y;
      if (x + 280 > window.innerWidth - 12) x = window.innerWidth - 280 - 12;
      if (x < 12) x = 12;
      if (y + rect.height > window.innerHeight - 12) y = position.y - rect.height - 16;
      if (y < 12) y = 12;
      setPos({ x, y });
    }
  }, [position]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const filtered = folders.filter((f) =>
    f.name.toLowerCase().includes(search.toLowerCase())
  );

  const isInWorkspace = currentFolderId === null;

  return (
    <div
      ref={ref}
      className="fixed z-[100] bg-white rounded-[4px] w-[280px] flex flex-col overflow-hidden"
      style={{
        top: pos.y,
        left: pos.x,
        boxShadow: "0px 5px 15px 0px rgba(30,30,30,0.05)",
        border: "1px solid #e4e4e4",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-[16px] py-[4px] h-[48px] shrink-0">
        <span className="font-['Satoshi-Medium',sans-serif] text-[#1e1e1e] text-[16px]">Move to</span>
        <button
          onClick={onClose}
          className="flex items-center justify-center size-[20px] rounded-[3px] hover:bg-[#f5f5f5] transition-colors"
        >
          <svg className="block" fill="none" width="10" height="10" viewBox="0 0 9.984 9.984">
            <path d={dropdownSvgPaths.p5391080} fill="#1E1E1E" />
          </svg>
        </button>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#e4e4e4] shrink-0" />

      {/* Search */}
      <div className="px-[16px] py-[8px] shrink-0">
        <div className="flex gap-[8px] items-center">
          <svg className="shrink-0" fill="none" width="14" height="14" viewBox="0 0 14 14">
            <path d={dropdownSvgPaths.p3c9d1dc0} fill="#949494" />
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="font-['Montserrat:Medium',sans-serif] text-[16px] text-[#1e1e1e] placeholder-[#949494] outline-none bg-transparent flex-1 min-w-0"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#e4e4e4] shrink-0" />

      {/* List: Workspace + Folders */}
      <div className="flex gap-[4px] p-[4px] max-h-[220px] overflow-hidden">
        <div className="flex flex-col gap-[0px] flex-1 overflow-y-auto">
          {/* Workspace — always first, greyed if already there */}
          {("workspace".includes(search.toLowerCase()) || search === "") && (
            <div
              onClick={isInWorkspace ? undefined : () => onSelect(null)}
              className={`flex items-center justify-between pl-[4px] pr-[12px] h-[48px] rounded-[2px] transition-colors group/fi ${
                isInWorkspace ? "cursor-default opacity-40" : "cursor-pointer hover:bg-[#f5f5f5]"
              }`}
            >
              <span className="font-['Satoshi-Regular',sans-serif] text-[#1e1e1e] text-[16px] group-hover/fi:text-[#1463FF] transition-colors">Workspace</span>
              {!isInWorkspace && (
                <svg className="shrink-0 opacity-0 group-hover/fi:opacity-100 transition-opacity" fill="none" width="7" height="13" viewBox="0 0 6.997 12.997">
                  <path d={dropdownSvgPaths.p3c2d8400} fill="#1e1e1e" />
                </svg>
              )}
            </div>
          )}

          {/* Folder rows */}
          {filtered.length === 0 && search !== "" ? (
            <div className="flex items-center px-[4px] py-[12px]">
              <span className="font-['Satoshi-Medium',sans-serif] text-[#949494] text-[14px]">No folders match</span>
            </div>
          ) : (
            filtered.map((folder) => {
              const isCurrent = folder.id === currentFolderId;
              return (
                <div
                  key={folder.id}
                  onClick={isCurrent ? undefined : () => onSelect(folder.id)}
                  className={`flex items-center justify-between pl-[4px] pr-[12px] h-[48px] rounded-[2px] transition-colors group/fi ${
                    isCurrent ? "cursor-default opacity-40" : "cursor-pointer hover:bg-[#f5f5f5]"
                  }`}
                >
                  <span className="font-['Satoshi-Regular',sans-serif] text-[#1e1e1e] text-[16px] group-hover/fi:text-[#1463FF] transition-colors">{folder.name}</span>
                  {!isCurrent && (
                    <svg className="shrink-0 opacity-0 group-hover/fi:opacity-100 transition-opacity" fill="none" width="7" height="13" viewBox="0 0 6.997 12.997">
                      <path d={dropdownSvgPaths.p3c2d8400} fill="#1463FF" />
                    </svg>
                  )}
                </div>
              );
            })
          )}

          {/* Empty state: no folders exist yet */}
          {folders.length === 0 && search === "" && (
            <div className="flex items-center px-[4px] py-[4px]">
              <span className="font-['Satoshi-Medium',sans-serif] text-[#949494] text-[14px]">No folders yet</span>
            </div>
          )}
        </div>
        {/* Decorative scrollbar */}
        {filtered.length > 4 && (
          <div className="bg-[#e4e4e4] flex flex-col items-center rounded-[2px] self-stretch shrink-0 w-[3px]">
            <div className="bg-[#949494] h-[40px] rounded-[100px] w-full" />
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="h-px bg-[#e4e4e4] shrink-0" />

      {/* Create new folder */}
      <div className="p-[4px] shrink-0">
        <button
          onClick={onCreateFolder}
          className="group flex items-center gap-[12px] w-full p-[16px] rounded-[4px] hover:bg-[#f0f4ff] transition-colors"
        >
          <svg className="shrink-0" fill="none" width="13" height="13" viewBox="0 0 13 13">
            <path d={dropdownSvgPaths.p226e2c00} fill="#1463FF" />
          </svg>
          <span className="font-['Satoshi-Regular',sans-serif] text-[#1e1e1e] text-[16px] group-hover:text-[#1463FF] transition-colors">Create new folder</span>
        </button>
      </div>
    </div>
  );
}

// ─── Action Bar ───────────────────────────────────────────────────────────────

function ChevronDown({ color = "#1B55F5" }: { color?: string }) {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]">
      <div className="absolute inset-[34.69%_13.37%_23.45%_13.53%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.695 6.6975">
          <path d={svgPaths.p3ce08f00} fill={color} id="Vector" />
        </svg>
      </div>
    </div>
  );
}

interface ActionBarProps {
  title: string;
  onBack: () => void;
  onMoreActionsClick: () => void;
  buttonRef: React.RefObject<HTMLDivElement>;
}

function ActionBar({ title, onBack, onMoreActionsClick, buttonRef }: ActionBarProps) {
  return (
    <div className="flex flex-col gap-[24px] items-start shrink-0 w-full">
      {/* Row 1 */}
      <div className="flex gap-[52px] items-center min-h-[36px] shrink-0 w-full">
        <div className="flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px">
          <div className="flex gap-[12px] items-center shrink-0">
            <div
              onClick={onBack}
              className="flex items-center justify-center shrink-0 cursor-pointer hover:opacity-60 transition-opacity"
            >
              <svg fill="none" preserveAspectRatio="none" viewBox="0 0 21 18" width="21" height="18">
                <path d={bodySvgPaths.p35ac80c0} fill="#1E1E1E" />
              </svg>
            </div>
            <p className="font-['Satoshi-Bold',sans-serif] leading-[28px] not-italic text-[#1e1e1e] text-[24px] whitespace-nowrap">{title}</p>
          </div>
        </div>
        <div className="flex gap-[12px] items-center justify-end shrink-0">
          <div className="bg-[#1b55f5] flex gap-[12px] items-center justify-center h-[48px] px-[24px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#1648d4] transition-colors">
            <div className="overflow-clip relative shrink-0 size-[16px]">
              <div className="absolute inset-[15%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2 11.2">
                  <path d={svgPaths.p259348f0} fill="white" id="Vector" />
                </svg>
              </div>
            </div>
            <span className="font-['Satoshi-Medium',sans-serif] not-italic text-[16px] text-white whitespace-nowrap">Import assets</span>
          </div>
          <div
            ref={buttonRef}
            onClick={onMoreActionsClick}
            className="flex gap-[12px] items-center justify-center h-[48px] px-[24px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#f0f4ff] transition-colors select-none"
          >
            <div aria-hidden="true" className="absolute border border-[#1b55f5] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <span className="font-['Satoshi-Medium',sans-serif] not-italic text-[#1b55f5] text-[16px] whitespace-nowrap">More actions</span>
            <ChevronDown color="#1B55F5" />
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex items-center justify-between min-h-[32px] shrink-0 w-full">
        <div className="flex items-center pr-[4px] shrink-0">
          <div className="flex items-center justify-center min-h-[40px] min-w-[40px] mr-[-4px] pointer-events-none relative rounded-[999px] shrink-0 size-[40px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[999px] size-full" src={imgAvatar} />
            <div aria-hidden="true" className="absolute border-2 border-[#f8f8f8] border-solid inset-[-2px] rounded-[1001px]" />
          </div>
          <div className="bg-[#e4e4e4] flex items-center justify-center min-h-[40px] min-w-[40px] mr-[-4px] p-[12px] relative rounded-[999px] shrink-0 cursor-pointer hover:bg-[#d8d8d8] transition-colors">
            <div aria-hidden="true" className="absolute border-2 border-[#f8f8f8] border-solid inset-[-2px] pointer-events-none rounded-[1001px]" />
            <div className="overflow-clip relative shrink-0 size-[16px]">
              <div className="absolute inset-[15%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2 11.2">
                  <path d={svgPaths.p259348f0} fill="#1E1E1E" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-[12px] items-center justify-end shrink-0">
          <div className="flex gap-[8px] items-center justify-center h-[40px] px-[16px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#f5f5f5] transition-colors">
            <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="relative shrink-0 size-[16px]">
              <div className="absolute inset-[6.25%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p3b712780} fill="#949494" id="Vector" />
                </svg>
              </div>
            </div>
            <span className="font-['Satoshi-Medium',sans-serif] not-italic text-[#1e1e1e] text-[16px] whitespace-nowrap">Share</span>
          </div>
          <div className="flex gap-[8px] items-center justify-center h-[40px] px-[16px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#f5f5f5] transition-colors">
            <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="relative shrink-0 size-[16px]">
              <div className="absolute inset-[0_-0.31%_0_-0.33%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1031 16">
                  <path d={svgPaths.p38d08cf1} fill="#949494" id="Vector" />
                </svg>
              </div>
            </div>
            <span className="font-['Satoshi-Medium',sans-serif] not-italic text-[#1e1e1e] text-[16px] whitespace-nowrap">Settings</span>
          </div>
          <div className="flex gap-[8px] items-center justify-center h-[40px] px-[16px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#f5f5f5] transition-colors">
            <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="relative shrink-0 size-[16px]">
              <div className="absolute inset-[22.66%_0]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8.75">
                  <path d={svgPaths.p4c39f80} fill="#949494" id="Vector" />
                </svg>
              </div>
            </div>
            <span className="font-['Satoshi-Medium',sans-serif] not-italic text-[#1e1e1e] text-[16px] whitespace-nowrap">Documents</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Filter Bar ───────────────────────────────────────────────────────────────

function FilterChevron() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]">
      <div className="absolute inset-[34.69%_13.37%_23.45%_13.53%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.695 6.6975">
          <path d={svgPaths.p3ce08f00} fill="#1E1E1E" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function FilterBar({ assetCount }: { assetCount: number }) {
  return (
    <div className="flex gap-[24px] items-center shrink-0 w-full">
      <div className="flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px overflow-clip">
        <div className="flex gap-[8px] items-center shrink-0">
          <span className="font-['Satoshi-Medium',sans-serif] not-italic text-[#1e1e1e] text-[14px] whitespace-nowrap">
            {assetCount} asset{assetCount !== 1 ? "s" : ""}
          </span>
          <div className="flex gap-[6px] items-center justify-center min-h-[32px] p-[8px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#eef2ff] transition-colors">
            <span className="font-['Satoshi-Medium',sans-serif] not-italic text-[#1b55f5] text-[14px]">Select all</span>
          </div>
        </div>
        <div className="h-[20px] relative shrink-0 w-0">
          <div className="absolute inset-[0_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 20">
              <path d="M0.5 0V20" stroke="#E4E4E4" />
            </svg>
          </div>
        </div>
        <div className="flex gap-[8px] items-center shrink-0">
          {["Status", "Assets type", "Indexing status", "Duplicates"].map((label) => (
            <div key={label} className="flex gap-[8px] items-center justify-center px-[8px] h-[30px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#f0f0f0] transition-colors">
              <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <span className="font-['Satoshi-Regular',sans-serif] not-italic text-[#646464] text-[14px] whitespace-nowrap">{label}</span>
              <FilterChevron />
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-[8px] items-center shrink-0">
        <div className="flex gap-[8px] items-center p-[8px] relative rounded-[4px] shrink-0 w-[200px]">
          <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="overflow-clip relative shrink-0 size-[16px]">
            <div className="absolute inset-[10%_8.36%_8.45%_10.08%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.05 13.0475">
                <path d={svgPaths.p1e2c0f00} fill="#1E1E1E" id="Vector" />
              </svg>
            </div>
          </div>
          <span className="font-['Satoshi-Regular',sans-serif] not-italic text-[#646464] text-[14px]">Search...</span>
        </div>
        <div className="flex gap-[8px] items-center justify-center p-[8px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#f0f0f0] transition-colors">
          <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="flex font-['Satoshi-Regular',sans-serif] gap-[4px] items-center not-italic shrink-0 text-[14px] whitespace-nowrap">
            <span className="text-[#646464]">Sort by:</span>
            <span className="text-[#1e1e1e]">Recently updated</span>
          </div>
          <FilterChevron />
        </div>
      </div>
    </div>
  );
}

// ─── Bulk Action Bar ──────────────────────────────────────────────────────────

function BulkActionBar({
  count,
  onUnselectAll,
  onSelectAll,
  totalCount,
  onMoveToClick,
}: {
  count: number;
  onUnselectAll: () => void;
  onSelectAll: () => void;
  totalCount: number;
  onMoveToClick: (e: React.MouseEvent) => void;
}) {
  const allSelected = count === totalCount;
  return (
    <div className="flex gap-[24px] items-center shrink-0 w-full">
      <div className="flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px overflow-clip">
        <div className="flex gap-[8px] items-center shrink-0">
          <span className="font-['Satoshi-Medium',sans-serif] not-italic text-[#1e1e1e] text-[14px] whitespace-nowrap">
            {count} asset{count !== 1 ? "s" : ""} selected
          </span>
          <button
            onClick={onUnselectAll}
            className="font-['Satoshi-Medium',sans-serif] not-italic text-[#1b55f5] text-[14px] underline underline-offset-2 cursor-pointer hover:opacity-70 transition-opacity whitespace-nowrap"
          >
            Unselect all
          </button>
          {!allSelected && (
            <button
              onClick={onSelectAll}
              className="font-['Satoshi-Medium',sans-serif] not-italic text-[#1b55f5] text-[14px] underline underline-offset-2 cursor-pointer hover:opacity-70 transition-opacity whitespace-nowrap"
            >
              Select all
            </button>
          )}
        </div>
        <div className="h-[20px] relative shrink-0 w-0">
          <div className="absolute inset-[0_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 20">
              <path d="M0.5 0V20" stroke="#E4E4E4" />
            </svg>
          </div>
        </div>
        <div className="flex gap-[8px] items-center shrink-0">
          <button className="flex gap-[8px] items-center justify-center px-[8px] h-[30px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#eef2ff] transition-colors">
            <div aria-hidden="true" className="absolute border border-[#1b55f5] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="overflow-clip relative shrink-0 size-[14px]">
              <div className="absolute inset-[0_0.12%_0.12%_0]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9811 15.9811">
                  <path d={cardHoverSvgPaths.p1e92d700} fill="#1B55F5" />
                </svg>
              </div>
            </div>
            <span className="font-['Satoshi-Medium',sans-serif] not-italic text-[#1b55f5] text-[14px] whitespace-nowrap">Index</span>
          </button>
          <button className="flex gap-[8px] items-center justify-center px-[8px] h-[30px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#eef2ff] transition-colors">
            <div aria-hidden="true" className="absolute border border-[#1b55f5] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="overflow-clip relative shrink-0 size-[14px]">
              <div className="absolute inset-[0_6.25%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
                  <path d={cardHoverSvgPaths.p2e9ed080} fill="#1B55F5" />
                </svg>
              </div>
            </div>
            <span className="font-['Satoshi-Medium',sans-serif] not-italic text-[#1b55f5] text-[14px] whitespace-nowrap">Modify status</span>
            <div className="overflow-clip relative shrink-0 size-[14px]">
              <div className="absolute inset-[34.69%_13.37%_23.45%_13.53%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.695 6.6975">
                  <path d={svgPaths.p3ce08f00} fill="#1B55F5" />
                </svg>
              </div>
            </div>
          </button>
          <button className="flex gap-[8px] items-center justify-center px-[8px] h-[30px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#eef2ff] transition-colors">
            <div aria-hidden="true" className="absolute border border-[#1b55f5] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="overflow-clip relative shrink-0 size-[14px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={cardHoverSvgPaths.p264d5100} fill="#1B55F5" />
              </svg>
            </div>
            <span className="font-['Satoshi-Medium',sans-serif] not-italic text-[#1b55f5] text-[14px] whitespace-nowrap">Duplicate</span>
          </button>
          <button onClick={onMoveToClick} className="flex gap-[8px] items-center justify-center px-[8px] h-[30px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#eef2ff] transition-colors">
            <div aria-hidden="true" className="absolute border border-[#1b55f5] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="overflow-clip relative shrink-0 size-[14px]">
              <div className="absolute inset-[11.25%_0.01%_10.63%_0]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9984 12.4984">
                  <path d={cardHoverSvgPaths.p14a8ee00} fill="#1B55F5" />
                </svg>
              </div>
            </div>
            <span className="font-['Satoshi-Medium',sans-serif] not-italic text-[#1b55f5] text-[14px] whitespace-nowrap">Move to</span>
            <div className="overflow-clip relative shrink-0 size-[14px]">
              <div className="absolute inset-[34.69%_13.37%_23.45%_13.53%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.695 6.6975">
                  <path d={svgPaths.p3ce08f00} fill="#1B55F5" />
                </svg>
              </div>
            </div>
          </button>
          <button className="flex gap-[8px] items-center justify-center px-[8px] h-[30px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#fff0f0] transition-colors">
            <div aria-hidden="true" className="absolute border border-[#e53e3e] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="overflow-clip relative shrink-0 size-[14px]">
              <div className="absolute inset-[0_6.25%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
                  <path d={cardHoverSvgPaths.pba11780} fill="#e53e3e" />
                </svg>
              </div>
            </div>
            <span className="font-['Satoshi-Medium',sans-serif] not-italic text-[#e53e3e] text-[14px] whitespace-nowrap">Delete</span>
          </button>
        </div>
      </div>
      <div className="flex gap-[8px] items-center shrink-0">
        <div className="flex gap-[8px] items-center justify-center px-[8px] h-[30px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#f0f0f0] transition-colors">
          <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="flex font-['Satoshi-Regular',sans-serif] gap-[4px] items-center not-italic shrink-0 text-[14px] whitespace-nowrap">
            <span className="text-[#646464]">Sort by:</span>
            <span className="text-[#1e1e1e]">Recently updated</span>
          </div>
          <FilterChevron />
        </div>
      </div>
    </div>
  );
}

// ─── Asset Card ───────────────────────────────────────────────────────────────

function AssetCard({
  image,
  isSelected,
  onToggleSelect,
  onMoveClick,
}: {
  image: string;
  isSelected?: boolean;
  onToggleSelect?: () => void;
  onMoveClick?: (e: React.MouseEvent) => void;
}) {
  return (
    <div className={`bg-white flex flex-col gap-[8px] items-start p-[8px] relative rounded-[4px] shrink-0 w-full group transition-shadow ${isSelected ? "ring-2 ring-[#1b55f5]" : ""}`}>
      {/* Image */}
      <div className="bg-[#e4e4e4] relative rounded-[2px] shrink-0 w-full overflow-hidden flex items-center justify-center h-[224px]">
        <img alt="" className="w-full h-full object-contain block" src={image} />

        {/* Hover/Selected overlay */}
        <div className={`absolute inset-0 bg-[rgba(60,60,59,0.8)] rounded-[2px] transition-opacity duration-200 flex flex-col p-[12px] ${isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
          <div className="flex items-center justify-between w-full">
            {/* Select circle */}
            <div
              onClick={(e) => { e.stopPropagation(); onToggleSelect?.(); }}
              className="relative shrink-0 size-[20px] cursor-pointer"
            >
              {isSelected ? (
                <svg className="absolute block size-full" fill="none" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="10" fill="#1B55F5" />
                  <path d="M5.5 10.5L8.5 13.5L14.5 7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={cardHoverSvgPaths.p37cd870} fill="white" />
                </svg>
              )}
            </div>
            {/* Action icons */}
            <div className="flex gap-[12px] items-center shrink-0">
              {/* pen */}
              <div className="overflow-clip relative shrink-0 size-[16px] cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
                <div className="absolute inset-[0_0.12%_0.12%_0]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9811 15.9811">
                    <path d={cardHoverSvgPaths.p1e92d700} fill="white" />
                  </svg>
                </div>
              </div>
              {/* flag */}
              <div className="overflow-clip relative shrink-0 size-[16px] cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
                <div className="absolute inset-[0_6.25%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
                    <path d={cardHoverSvgPaths.p2e9ed080} fill="white" />
                  </svg>
                </div>
              </div>
              {/* clone */}
              <div className="overflow-clip relative shrink-0 size-[16px] cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d={cardHoverSvgPaths.p264d5100} fill="white" />
                </svg>
              </div>
              {/* move to folder */}
              <div
                onClick={onMoveClick}
                title="Move to folder"
                className="overflow-clip relative shrink-0 size-[16px] cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
              >
                <div className="absolute inset-[11.25%_0.01%_10.63%_0]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9984 12.4984">
                    <path d={cardHoverSvgPaths.p14a8ee00} fill="white" />
                  </svg>
                </div>
              </div>
              {/* trash */}
              <div className="overflow-clip relative shrink-0 size-[16px] cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
                <div className="absolute inset-[0_6.25%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
                    <path d={cardHoverSvgPaths.pba11780} fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-[4px] items-center not-italic py-[16px] shrink-0 text-center w-full">
        <p className="font-['Satoshi-Bold',sans-serif] leading-[normal] text-[#1e1e1e] text-[18px] w-full">Denali.jpg</p>
        <p className="font-['Satoshi-Medium',sans-serif] leading-[normal] text-[#1e1e1e] text-[12px] w-full">
          <span>Updated by </span>
          <span className="font-['Satoshi-Medium',sans-serif]">Emilie</span>
        </p>
      </div>

      {/* TO BE CHECKED row */}
      <div className="flex gap-[8px] h-[30px] items-center shrink-0 w-full">
        <div className="flex flex-col h-[30px] items-start justify-center px-[8px] shrink-0">
          <div className="overflow-clip relative shrink-0 size-[16px]">
            <div className="absolute inset-[6.25%_0]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
                <path d={svgPaths.p1bc1b600} fill="#949494" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-[#f8f8f8] flex-[1_0_0] h-[30px] relative rounded-[2px]">
          <div className="flex items-center justify-between h-full px-[12px]">
            <div className="flex gap-[8px] items-center shrink-0">
              <div className="relative shrink-0 size-[10px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                  <circle cx="5" cy="5" fill="#FB973B" r="5" />
                </svg>
              </div>
              <span className="font-['Satoshi-Medium',sans-serif] not-italic text-[#1e1e1e] text-[12px] uppercase">to be checked</span>
            </div>
            <div className="overflow-clip relative shrink-0 size-[16px]">
              <div className="absolute inset-[28.15%_9.38%_28.12%_9.38%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9969 6.99687">
                  <path d={svgPaths.p1afffb80} fill="#1E1E1E" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* READY row */}
      <div className="flex gap-[8px] h-[30px] items-center shrink-0 w-full">
        <div className="flex flex-col h-[30px] items-start justify-center px-[8px] shrink-0">
          <div className="overflow-clip relative shrink-0 size-[16px]">
            <div className="absolute inset-[6.25%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                <path d={svgPaths.p37ef8100} fill="#949494" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-[#f8f8f8] flex-[1_0_0] h-[30px] relative rounded-[2px]">
          <div className="flex items-center justify-between h-full px-[12px]">
            <div className="flex gap-[8px] items-center shrink-0">
              <div className="relative shrink-0 size-[10px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                  <circle cx="5" cy="5" fill="#22A43F" r="5" />
                </svg>
              </div>
              <span className="font-['Satoshi-Medium',sans-serif] not-italic text-[#1f1f1e] text-[12px] uppercase">ready</span>
            </div>
            <div className="overflow-clip relative shrink-0 size-[16px]">
              <div className="absolute inset-[28.15%_9.38%_28.12%_9.38%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9969 6.99687">
                  <path d={svgPaths.p1afffb80} fill="#1E1E1E" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Assets Grid ──────────────────────────────────────────────────────────────

function AssetsGrid({
  assets,
  selectedAssets,
  onToggleSelect,
  onMoveClick,
}: {
  assets: CardData[];
  selectedAssets: Set<string>;
  onToggleSelect: (assetId: string) => void;
  onMoveClick?: (assetId: string, e: React.MouseEvent) => void;
}) {
  if (assets.length === 0) {
    return (
      <div className="flex flex-col gap-[12px] items-start shrink-0 w-full">
        <p className="font-['Satoshi-Bold',sans-serif] leading-[normal] text-[#646464] text-[12px] uppercase tracking-[0.5px]">Assets</p>
        <div className="flex flex-col items-center justify-center w-full py-[80px] gap-[16px]">
          <div className="overflow-clip relative shrink-0 size-[48px] opacity-30">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <path d={docSvgPaths.p1d75e180} fill="#949494" />
            </svg>
          </div>
          <p className="font-['Satoshi-Medium',sans-serif] text-[#949494] text-[14px]">No assets yet — import some or move them from the workspace</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[12px] items-start shrink-0 w-full">
      <p className="font-['Satoshi-Bold',sans-serif] leading-[normal] text-[#646464] text-[12px] uppercase tracking-[0.5px]">Assets</p>
      <div className="content-start grid grid-cols-4 gap-x-[24px] gap-y-[32px] items-start w-full">
        {assets.map((card) => (
          <div key={card.id} className="min-w-0">
            <AssetCard
              image={card.image}
              isSelected={selectedAssets.has(card.id)}
              onToggleSelect={() => onToggleSelect(card.id)}
              onMoveClick={
                onMoveClick
                  ? (e) => { e.stopPropagation(); onMoveClick(card.id, e); }
                  : undefined
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Delete Folder Modal ──────────────────────────────────────────────────────

function DeleteFolderModal({
  folderName,
  assetCount,
  onConfirm,
  onCancel,
}: {
  folderName: string;
  assetCount: number;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-[8px] w-[640px] flex flex-col shadow-[0px_8px_32px_0px_rgba(30,30,30,0.18)]">
        {/* Header */}
        <div className="flex items-center justify-between px-[32px] py-[24px]">
          <p className="font-['Satoshi-Bold',sans-serif] text-[#1e1e1e] text-[20px] leading-[normal]">
            Delete {folderName}?
          </p>
          <button
            onClick={onCancel}
            className="flex items-center justify-center size-[28px] rounded-[4px] hover:bg-[#f5f5f5] transition-colors text-[#1e1e1e]"
          >
            <X size={16} strokeWidth={2} />
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#e4e4e4] shrink-0" />

        {/* Body */}
        <div className="flex items-center justify-center px-[32px] py-[48px]">
          <p className="font-['Satoshi-Regular',sans-serif] text-[#1e1e1e] text-[16px] text-center leading-[1.5]">
            The folder currently contains {assetCount} asset{assetCount !== 1 ? "s" : ""}. Do you really want to delete the folder?
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#e4e4e4] shrink-0" />

        {/* Footer */}
        <div className="flex items-center justify-between px-[32px] py-[20px]">
          <button
            onClick={onCancel}
            className="font-['Satoshi-Medium',sans-serif] text-[#1463ff] text-[16px] hover:opacity-70 transition-opacity"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-[#1463ff] font-['Satoshi-Medium',sans-serif] text-white text-[16px] px-[32px] h-[48px] rounded-[4px] hover:bg-[#1150d4] transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Folder Card ─────────────────────────────────────────────────────────────

function FolderItem({
  folder,
  onEnter,
  onDelete,
  onRename,
}: {
  folder: FolderData;
  onEnter: (id: number) => void;
  onDelete: (id: number) => void;
  onRename: (id: number, name: string) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isRenaming, setIsRenaming] = useState(false);
  const [draftName, setDraftName] = useState(folder.name);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const ellipsisRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        menuRef.current && !menuRef.current.contains(e.target as Node) &&
        ellipsisRef.current && !ellipsisRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    if (isRenaming && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isRenaming]);

  const startRename = () => { setDraftName(folder.name); setIsRenaming(true); setMenuOpen(false); };
  const commitRename = () => { const t = draftName.trim(); if (t) onRename(folder.id, t); setIsRenaming(false); };
  const cancelRename = () => { setDraftName(folder.name); setIsRenaming(false); };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") commitRename();
    if (e.key === "Escape") cancelRename();
  };

  return (
    <>
    <div
      onClick={() => !isRenaming && onEnter(folder.id)}
      className={`bg-white flex gap-[12px] items-center p-[12px] relative rounded-[6px] w-full transition-colors group/folder ${isRenaming ? "cursor-default" : "cursor-pointer hover:bg-[#fafafa]"}`}
    >
      <div className="overflow-clip relative shrink-0 size-[32px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={docSvgPaths.p1d75e180} fill="#949494" />
        </svg>
      </div>

      <div className="flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px overflow-hidden">
        {isRenaming ? (
          <input
            ref={inputRef}
            value={draftName}
            onChange={(e) => setDraftName(e.target.value)}
            onKeyDown={handleKeyDown}
            onClick={(e) => e.stopPropagation()}
            className="font-['Satoshi-Bold',sans-serif] text-[#1f1f1e] text-[14px] leading-[normal] bg-transparent border-b border-[#1b55f5] outline-none w-full"
          />
        ) : (
          <p className="font-['Satoshi-Bold',sans-serif] leading-[normal] text-[#1f1f1e] text-[14px] truncate w-full">{folder.name}</p>
        )}
        <p className="font-['Satoshi-Medium',sans-serif] leading-[normal] text-[#1f1f1e] text-[12px]">
          <span>{folder.assets.length} asset{folder.assets.length !== 1 ? "s" : ""} · Added by </span>
          <span className="font-['Satoshi-Medium',sans-serif]">Emilie</span>
        </p>
      </div>

      {isRenaming ? (
        <div className="flex gap-[4px] items-center shrink-0" onClick={(e) => e.stopPropagation()}>
          <button onClick={commitRename} className="flex items-center justify-center size-[28px] rounded-[4px] hover:bg-[#e8f5e9] text-[#22A43F] transition-colors" title="Save">
            <Check size={15} strokeWidth={2.5} />
          </button>
          <button onClick={cancelRename} className="flex items-center justify-center size-[28px] rounded-[4px] hover:bg-[#fff0f0] text-[#e53e3e] transition-colors" title="Cancel">
            <X size={15} strokeWidth={2.5} />
          </button>
        </div>
      ) : (
        <div
          ref={ellipsisRef}
          onClick={(e) => { e.stopPropagation(); setMenuOpen((v) => !v); }}
          className="flex items-center justify-center relative shrink-0 size-[28px] rounded-[4px] hover:bg-[#f0f0f0] transition-colors opacity-0 group-hover/folder:opacity-100"
        >
          <svg className="block" fill="none" width="12" height="2" viewBox="0 0 12 2">
            <path d={docSvgPaths.pf2a5c00} fill="#3C3C3B" />
          </svg>
          {menuOpen && (
            <div
              ref={menuRef}
              onClick={(e) => e.stopPropagation()}
              className="absolute top-[calc(100%+4px)] right-0 bg-white rounded-[6px] shadow-[0px_5px_15px_0px_rgba(30,30,30,0.12)] border border-[#e4e4e4] flex flex-col gap-[2px] p-[4px] w-[160px] z-50"
            >
              {[
                { label: "Rename", danger: false },
                { label: "Share", danger: false },
                { label: "Duplicate", danger: false },
                { label: "Delete", danger: true },
              ].map((item) => (
                <div
                  key={item.label}
                  onClick={() => {
                    if (item.label === "Delete") {
                      setMenuOpen(false);
                      if (folder.assets.length === 0) {
                        onDelete(folder.id);
                      } else {
                        setShowDeleteModal(true);
                      }
                    } else if (item.label === "Rename") { startRename(); }
                    else { setMenuOpen(false); }
                  }}
                  className={`flex items-center px-[10px] h-[36px] rounded-[4px] cursor-pointer transition-colors ${item.danger ? "hover:bg-[#fff0f0] text-[#e53e3e]" : "hover:bg-[#f5f5f5] text-[#1e1e1e]"}`}
                >
                  <span className="font-['Satoshi-Medium',sans-serif] text-[14px]">{item.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>

    {showDeleteModal && (
      <DeleteFolderModal
        folderName={folder.name}
        assetCount={folder.assets.length}
        onConfirm={() => { setShowDeleteModal(false); onDelete(folder.id); }}
        onCancel={() => setShowDeleteModal(false)}
      />
    )}
    </>
  );
}

function FoldersSection({
  folders,
  onEnter,
  onDelete,
  onRename,
}: {
  folders: FolderData[];
  onEnter: (id: number) => void;
  onDelete: (id: number) => void;
  onRename: (id: number, name: string) => void;
}) {
  return (
    <div className="flex flex-col gap-[12px] items-start shrink-0 w-full">
      <p className="font-['Satoshi-Medium',sans-serif] leading-[normal] text-[#646464] text-[12px] uppercase tracking-[0.5px]">Folders</p>
      <div className="content-start grid grid-cols-4 gap-x-[24px] gap-y-[16px] items-start w-full">
        {folders.map((folder) => (
          <div key={folder.id} className="min-w-0">
            <FolderItem folder={folder} onEnter={onEnter} onDelete={onDelete} onRename={onRename} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

const initialWorkspaceAssets: CardData[] = [
  { id: "a1", image: imgImage },
  { id: "a2", image: imgImage1 },
  { id: "a3", image: imgImage2 },
  { id: "a4", image: imgImage3 },
  { id: "a5", image: imgImage4 },
];

export default function MediaTransferInterface() {
  const [workspaceAssets, setWorkspaceAssets] = useState<CardData[]>(initialWorkspaceAssets);
  const [folders, setFolders] = useState<FolderData[]>([]);
  const [nextFolderId, setNextFolderId] = useState(1);
  const [activeFolderId, setActiveFolderId] = useState<number | null>(null);
  const [moveDropdown, setMoveDropdown] = useState<MoveDropdownState | null>(null);
  const [selectedAssets, setSelectedAssets] = useState<Set<string>>(new Set());
  const [bulkMovePos, setBulkMovePos] = useState<{ x: number; y: number } | null>(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const activeFolder = activeFolderId !== null
    ? folders.find((f) => f.id === activeFolderId) ?? null
    : null;

  const handleAddFolder = () => {
    const newFolder: FolderData = { id: nextFolderId, name: `Folder ${nextFolderId}`, assets: [] };
    setFolders((prev) => [newFolder, ...prev]);
    setNextFolderId((n) => n + 1);
    setIsDropdownOpen(false);
  };

  const handleDeleteFolder = (id: number) => {
    setFolders((prev) => prev.filter((f) => f.id !== id));
    if (activeFolderId === id) setActiveFolderId(null);
  };

  const handleEnterFolder = (id: number) => { setActiveFolderId(id); setIsDropdownOpen(false); setSelectedAssets(new Set()); };
  const handleBack = () => { setActiveFolderId(null); setIsDropdownOpen(false); setSelectedAssets(new Set()); };
  const handleRenameFolder = (id: number, name: string) => {
    setFolders((prev) => prev.map((f) => f.id === id ? { ...f, name } : f));
  };

  // ── Selection ──
  const handleToggleSelect = (assetId: string) => {
    setSelectedAssets((prev) => {
      const next = new Set(prev);
      if (next.has(assetId)) next.delete(assetId);
      else next.add(assetId);
      return next;
    });
  };

  const handleUnselectAll = () => setSelectedAssets(new Set());

  const handleBulkMoveClick = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setBulkMovePos({ x: rect.left, y: rect.bottom + 8 });
  };

  const handleBulkMove = (destination: number | null) => {
    const ids = Array.from(selectedAssets);
    if (isInsideFolder && activeFolder) {
      const assetsToMove = activeFolder.assets.filter((a) => ids.includes(a.id));
      if (destination === null) {
        setFolders((prev) => prev.map((f) =>
          f.id === activeFolderId ? { ...f, assets: f.assets.filter((a) => !ids.includes(a.id)) } : f
        ));
        setWorkspaceAssets((prev) => [...prev, ...assetsToMove]);
      } else {
        setFolders((prev) => prev.map((f) => {
          if (f.id === activeFolderId) return { ...f, assets: f.assets.filter((a) => !ids.includes(a.id)) };
          if (f.id === destination) return { ...f, assets: [...f.assets, ...assetsToMove] };
          return f;
        }));
      }
    } else {
      const assetsToMove = workspaceAssets.filter((a) => ids.includes(a.id));
      setWorkspaceAssets((prev) => prev.filter((a) => !ids.includes(a.id)));
      if (destination !== null) {
        setFolders((prev) => prev.map((f) =>
          f.id === destination ? { ...f, assets: [...f.assets, ...assetsToMove] } : f
        ));
      }
    }
    setSelectedAssets(new Set());
    setBulkMovePos(null);
  };

  const handleBulkCreateFolder = () => {
    const ids = Array.from(selectedAssets);
    let assetsToMove: CardData[];
    if (isInsideFolder && activeFolder) {
      assetsToMove = activeFolder.assets.filter((a) => ids.includes(a.id));
      const newFolder: FolderData = { id: nextFolderId, name: `Folder ${nextFolderId}`, assets: assetsToMove };
      setFolders((prev) => [
        newFolder,
        ...prev.map((f) => f.id === activeFolderId ? { ...f, assets: f.assets.filter((a) => !ids.includes(a.id)) } : f),
      ]);
    } else {
      assetsToMove = workspaceAssets.filter((a) => ids.includes(a.id));
      const newFolder: FolderData = { id: nextFolderId, name: `Folder ${nextFolderId}`, assets: assetsToMove };
      setWorkspaceAssets((prev) => prev.filter((a) => !ids.includes(a.id)));
      setFolders((prev) => [newFolder, ...prev]);
    }
    setNextFolderId((n) => n + 1);
    setSelectedAssets(new Set());
    setBulkMovePos(null);
  };

  // ── Move to folder / workspace ──
  const handleMoveIconClick = (assetId: string, e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setMoveDropdown({ assetId, x: rect.left - 240, y: rect.bottom + 10 });
  };

  const handleMoveToFolder = (destination: number | null) => {
    if (!moveDropdown) return;
    const assetId = moveDropdown.assetId;
    let asset: CardData | undefined;

    if (isInsideFolder && activeFolder) {
      // Source: current folder
      asset = activeFolder.assets.find((a) => a.id === assetId);
      if (!asset) { setMoveDropdown(null); return; }
      if (destination === null) {
        // folder → workspace
        setFolders((prev) => prev.map((f) =>
          f.id === activeFolderId ? { ...f, assets: f.assets.filter((a) => a.id !== assetId) } : f
        ));
        setWorkspaceAssets((prev) => [...prev, asset!]);
      } else {
        // folder → another folder (single atomic update)
        setFolders((prev) => prev.map((f) => {
          if (f.id === activeFolderId) return { ...f, assets: f.assets.filter((a) => a.id !== assetId) };
          if (f.id === destination) return { ...f, assets: [...f.assets, asset!] };
          return f;
        }));
      }
    } else {
      // Source: workspace
      asset = workspaceAssets.find((a) => a.id === assetId);
      if (!asset) { setMoveDropdown(null); return; }
      setWorkspaceAssets((prev) => prev.filter((a) => a.id !== assetId));
      if (destination !== null) {
        setFolders((prev) => prev.map((f) =>
          f.id === destination ? { ...f, assets: [...f.assets, asset!] } : f
        ));
      }
    }
    setMoveDropdown(null);
  };

  const handleCreateFolderFromMove = () => {
    if (!moveDropdown) return;
    const assetId = moveDropdown.assetId;
    let asset: CardData | undefined;

    if (isInsideFolder && activeFolder) {
      asset = activeFolder.assets.find((a) => a.id === assetId);
      if (!asset) { setMoveDropdown(null); return; }
      const newFolder: FolderData = { id: nextFolderId, name: `Folder ${nextFolderId}`, assets: [asset] };
      setFolders((prev) => [
        newFolder,
        ...prev.map((f) => f.id === activeFolderId ? { ...f, assets: f.assets.filter((a) => a.id !== assetId) } : f),
      ]);
    } else {
      asset = workspaceAssets.find((a) => a.id === assetId);
      if (!asset) { setMoveDropdown(null); return; }
      const newFolder: FolderData = { id: nextFolderId, name: `Folder ${nextFolderId}`, assets: [asset] };
      setWorkspaceAssets((prev) => prev.filter((a) => a.id !== assetId));
      setFolders((prev) => [newFolder, ...prev]);
    }
    setNextFolderId((n) => n + 1);
    setMoveDropdown(null);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current && !buttonRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    if (isDropdownOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen]);

  const isInsideFolder = activeFolderId !== null && activeFolder !== null;
  const currentAssets = isInsideFolder ? activeFolder.assets : workspaceAssets;
  const currentTitle = isInsideFolder ? activeFolder.name : "Workspace title";
  const hasSelection = selectedAssets.size > 0;

  const handleSelectAll = () => setSelectedAssets(new Set(currentAssets.map((a) => a.id)));

  return (
    <div className="bg-[#f8f8f8] flex flex-col items-start relative h-screen overflow-y-auto w-full">
      <Navigation />

      <div className="flex-1 min-h-px min-w-px relative w-full">
        <div className="flex flex-col gap-[40px] items-start px-[80px] py-[40px] size-full">
          <ActionBar
            title={currentTitle}
            onBack={handleBack}
            onMoreActionsClick={() => setIsDropdownOpen((v) => !v)}
            buttonRef={buttonRef}
          />

          <div className="flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px w-full">
            {hasSelection ? (
              <BulkActionBar
                count={selectedAssets.size}
                totalCount={currentAssets.length}
                onUnselectAll={handleUnselectAll}
                onSelectAll={handleSelectAll}
                onMoveToClick={handleBulkMoveClick}
              />
            ) : (
              <FilterBar assetCount={currentAssets.length} />
            )}

            {!isInsideFolder && folders.length > 0 && (
              <FoldersSection
                folders={folders}
                onEnter={handleEnterFolder}
                onDelete={handleDeleteFolder}
                onRename={handleRenameFolder}
              />
            )}

            <AssetsGrid
              assets={currentAssets}
              selectedAssets={selectedAssets}
              onToggleSelect={handleToggleSelect}
              onMoveClick={handleMoveIconClick}
            />
          </div>
        </div>
      </div>

      {isDropdownOpen && (
        <DropdownMenu
          dropdownRef={dropdownRef}
          buttonRef={buttonRef}
          onAddFolder={!isInsideFolder ? handleAddFolder : undefined}
        />
      )}

      {bulkMovePos && (
        <AddToFolderDropdown
          folders={folders}
          currentFolderId={activeFolderId}
          position={bulkMovePos}
          onSelect={handleBulkMove}
          onCreateFolder={handleBulkCreateFolder}
          onClose={() => setBulkMovePos(null)}
        />
      )}

      {moveDropdown && (
        <AddToFolderDropdown
          folders={folders}
          currentFolderId={activeFolderId}
          position={{ x: moveDropdown.x, y: moveDropdown.y }}
          onSelect={handleMoveToFolder}
          onCreateFolder={handleCreateFolderFromMove}
          onClose={() => setMoveDropdown(null)}
        />
      )}
    </div>
  );
}