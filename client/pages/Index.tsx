import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";
import { Search, ChevronDown, X } from "lucide-react";

export default function Index() {
  const [agentEnabled, setAgentEnabled] = useState(true);

  const agents = [
    { id: 1, name: "재무 시나리오 비교", enabled: true },
    { id: 2, name: "재무 데이터 분석", enabled: true },
    { id: 3, name: "지출 패턴 분석", enabled: true },
    { id: 4, name: "월별/연간 예산 초안 생성", enabled: true },
    { id: 5, name: "달성률 추적", enabled: true },
    { id: 6, name: "자산 배분 분석", enabled: true },
    { id: 7, name: "투자 위험도 진단", enabled: true },
    { id: 8, name: "예상 세금 계산", enabled: true },
    { id: 9, name: "공제 항목 추천", enabled: true },
    { id: 10, name: "현금 흐름 분석", enabled: true },
  ];

  const departments = [
    { name: "인사 담당자", count: "3/10" },
    { name: "마케팅 담당자", count: "3/10" },
    { name: "디자인 담당자", count: "3/10" },
    { name: "재무 담당자", count: "10/10", selected: true },
    { name: "기획 담당자", count: "3/10" },
    { name: "개발 담당자", count: "3/10" },
    { name: "일반 임직원", count: "3/10" },
    { name: "보안 담당자", count: "3/10" },
    { name: "시스템 당담자", count: "3/10" },
  ];

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <div className="flex-1 overflow-auto">
          <div className="p-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1 text-sm mb-4">
              <span className="text-neutral-400 px-1">조직</span>
              <span className="text-text-secondary">/</span>
              <span className="text-text-primary px-1">법인 사용 설정</span>
            </div>

            {/* Blue Header Section */}
            <div className="flex items-center justify-between px-5 py-[15px] rounded-lg border border-[#BEDBFF] bg-gradient-to-r from-[#DBEAFE] to-[#E0E7FF] shadow-sm mb-6">
              <div className="flex items-center gap-3">
                <div className="w-[38px] h-[38px] relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.5007 15.8333H19.1673V17.5H0.833984V15.8333H2.50065V3.33333C2.50065 2.8731 2.87375 2.5 3.33398 2.5H11.6673C12.1276 2.5 12.5007 2.8731 12.5007 3.33333V15.8333H14.1673V7.5H16.6673C17.1276 7.5 17.5007 7.8731 17.5007 8.33333V15.8333ZM5.83398 9.16667V10.8333H9.16732V9.16667H5.83398ZM5.83398 5.83333V7.5H9.16732V5.83333H5.83398Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
                <h1 className="text-xl font-bold text-text-primary leading-[31px]">
                  법인 사용 설정
                </h1>
              </div>
              <div className="flex items-center gap-1.5">
                <button className="h-8 px-3 text-sm font-bold text-primary border border-[#51A2FF] rounded hover:bg-primary-50/30 transition-colors">
                  취소
                </button>
                <button className="h-8 px-3 text-sm font-bold text-white bg-primary rounded hover:bg-primary/90 transition-colors">
                  저장
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              {/* Left Panel - Department Selection */}
              <div className="w-[260px] flex-shrink-0 rounded-lg border border-neutral-200 shadow-sm overflow-hidden">
                <div className="h-[46px] border-b border-neutral-200 flex items-center px-5">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-[21px] h-5 px-1.5 rounded-full bg-primary-50 text-sm font-bold text-[#193CB8] leading-5">
                      1
                    </span>
                    <h2 className="text-base font-bold text-text-primary leading-6">
                      법인/부서 선택
                    </h2>
                  </div>
                </div>

                <div className="p-5 border-b border-neutral-200">
                  <div className="relative">
                    <button className="w-full h-8 px-3 flex items-center justify-between rounded border border-neutral-200 shadow-[0_1px_2px_0_rgba(50,56,62,0.08)] bg-white hover:bg-neutral-20">
                      <div className="flex items-center gap-1">
                        <span className="text-sm text-text-tertiary">
                          법인 선택
                        </span>
                        <div className="inline-flex items-center gap-0.5 h-5 px-1.5 rounded-full bg-primary-50">
                          <span className="text-xs text-[#193CB8]">
                            설정 그룹
                          </span>
                          <X className="w-4 h-4 text-[#193CB8]" />
                        </div>
                      </div>
                      <ChevronDown className="w-[18px] h-[18px] text-text-primary" />
                    </button>
                  </div>
                </div>

                <div className="p-5">
                  <div className="relative mb-3">
                    <input
                      type="text"
                      placeholder="부서명 검색"
                      className="w-full h-8 px-3 pr-9 text-sm rounded border border-neutral-200 shadow-[0_1px_2px_0_rgba(50,56,62,0.08)] placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <Search className="absolute right-3 top-2 w-[18px] h-[18px] text-text-primary" />
                  </div>

                  <div className="space-y-1">
                    {departments.map((dept, idx) => (
                      <div
                        key={idx}
                        className={`h-8 px-3 flex items-center rounded-[5px] border cursor-pointer transition-colors ${
                          dept.selected
                            ? "border-primary bg-white"
                            : "border-neutral-200 bg-white hover:bg-neutral-20"
                        }`}
                      >
                        <span
                          className={`text-sm ${dept.selected ? "font-bold text-primary" : "font-normal text-text-primary"}`}
                        >
                          {dept.name} ({dept.count})
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Panel - Agent Settings */}
              <div className="flex-1 rounded-lg border border-neutral-200 shadow-sm overflow-hidden">
                <div className="h-[46px] border-b border-neutral-200 flex items-center px-5">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-[23px] h-5 px-1.5 rounded-full bg-primary-50 text-sm font-bold text-[#193CB8] leading-5">
                      2
                    </span>
                    <h2 className="text-base font-bold text-text-primary leading-6">
                      에이전트 사용 설정
                    </h2>
                  </div>
                </div>

                <div className="p-5 border-b border-neutral-200">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold text-text-secondary">
                      선택된 법인/부서
                    </span>
                    <div className="flex items-center gap-1 text-sm">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.9993 12.6667H15.3327V14H0.666016V12.6667H1.99935V2.66667C1.99935 2.29848 2.29783 2 2.66602 2H9.33268C9.70088 2 9.99935 2.29848 9.99935 2.66667V12.6667H12.666V7.33333H11.3327V6H13.3327C13.7009 6 13.9993 6.29848 13.9993 6.66667V12.6667ZM3.33268 3.33333V12.6667H8.66602V3.33333H3.33268ZM4.66602 7.33333H7.33268V8.66667H4.66602V7.33333ZM4.66602 4.66667H7.33268V6H4.66602V4.66667Z"
                          fill="#45556C"
                        />
                      </svg>
                      <span className="text-text-primary px-1">설정 그룹</span>
                      <span className="text-text-secondary">/</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.66732 3.33366V1.33366C4.66732 0.965472 4.9658 0.666992 5.33398 0.666992H10.6673C11.0355 0.666992 11.334 0.965472 11.334 1.33366V3.33366H14.0007C14.3689 3.33366 14.6673 3.63214 14.6673 4.00033V13.3337C14.6673 13.7019 14.3689 14.0003 14.0007 14.0003H2.00065C1.63246 14.0003 1.33398 13.7019 1.33398 13.3337V4.00033C1.33398 3.63214 1.63246 3.33366 2.00065 3.33366H4.66732ZM2.66732 10.667V12.667H13.334V10.667H2.66732ZM2.66732 9.33366H13.334V4.66699H2.66732V9.33366ZM6.00065 2.00033V3.33366H10.0007V2.00033H6.00065ZM7.33398 7.33366H8.66732V8.66699H7.33398V7.33366Z"
                          fill="#45556C"
                        />
                      </svg>
                      <span className="text-text-primary px-1">
                        재무 담당자
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-10">
                    <span className="text-sm font-bold text-text-secondary">
                      에이전트 사용 여부
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-sm text-primary">사용</span>
                      <Switch
                        checked={agentEnabled}
                        onCheckedChange={setAgentEnabled}
                      />
                    </div>
                  </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-neutral-050">
                        <th className="h-10 px-2 text-left text-sm font-bold text-text-secondary border-y border-l border-neutral-200 rounded-tl">
                          사용 여부
                        </th>
                        <th className="h-10 px-2 text-left text-sm font-bold text-text-secondary border-y border-neutral-200">
                          에이전트 명
                        </th>
                        <th className="h-10 px-2 text-left text-sm font-bold text-text-secondary border-y border-neutral-200">
                          버전
                        </th>
                        <th className="h-10 px-2 text-left text-sm font-bold text-text-secondary border-y border-neutral-200">
                          사용 시작일
                        </th>
                        <th className="h-10 px-2 text-left text-sm font-bold text-text-secondary border-y border-r border-neutral-200 rounded-tr">
                          사용 종료일
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {agents.map((agent, idx) => (
                        <tr key={agent.id} className="bg-white">
                          <td
                            className={`h-[46px] px-2 border-b border-l border-neutral-200 ${idx === agents.length - 1 ? "rounded-bl" : ""}`}
                          >
                            <div className="flex justify-center">
                              <Switch checked={agent.enabled} />
                            </div>
                          </td>
                          <td className="h-[46px] px-2 border-b border-neutral-200">
                            <span className="text-sm text-text-primary">
                              {agent.name}
                            </span>
                          </td>
                          <td className="h-[46px] px-2 border-b border-neutral-200">
                            <div className="w-[126px]">
                              <Select defaultValue="1.1.0">
                                <SelectTrigger className="w-full h-8 text-sm text-text-tertiary border-neutral-200 shadow-[0_1px_2px_0_rgba(50,56,62,0.08)]">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="1.1.0">1.1.0</SelectItem>
                                  <SelectItem value="1.0.0">1.0.0</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </td>
                          <td className="h-[46px] px-2 border-b border-neutral-200">
                            <div className="w-[126px]">
                              <DatePicker value="2024-12-01" />
                            </div>
                          </td>
                          <td
                            className={`h-[46px] px-2 border-b border-r border-neutral-200 ${idx === agents.length - 1 ? "rounded-br" : ""}`}
                          >
                            <div className="w-[126px]">
                              <DatePicker value="2025-12-31" />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
