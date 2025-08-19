"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Page() {
  const fileInputRef = useRef(null);
  // files: [{ file: File, url: objectURL }]
  const [files, setFiles] = useState([]);
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });
  const [formError, setFormError] = useState("");

  const MAX_MB = 10;
  const MAX_BYTES = MAX_MB * 1024 * 1024;

  const onChooseFromGallery = () => fileInputRef.current?.click();

  const onFilesSelected = (e) => {
    const picked = Array.from(e.target.files || []);
    const accepted = [];
    let rejectedCount = 0;

    picked.forEach((f) => {
      if (f.size <= MAX_BYTES) {
        accepted.push({ file: f, url: URL.createObjectURL(f) });
      } else {
        rejectedCount += 1;
      }
    });

    setFiles((prev) => {
      const next = [...prev, ...accepted];
      if (next.length && selectedIdx === null) setSelectedIdx(0);
      return next;
    });
    setError(
      rejectedCount
        ? `${rejectedCount} file(s) exceeded ${MAX_MB}MB and were skipped.`
        : ""
    );
    e.target.value = ""; // reset so the same file can be chosen again
  };

  const removeFile = (idx) => {
    setFiles((prev) => {
      const target = prev[idx];
      if (target) URL.revokeObjectURL(target.url);
      const next = prev.filter((_, i) => i !== idx);
      if (selectedIdx === idx) setSelectedIdx(next.length ? 0 : null);
      else if (selectedIdx > idx) setSelectedIdx((i) => i - 1);
      return next;
    });
  };

  // cleanup object URLs on unmount
  useEffect(() => {
    return () => {
      files.forEach((f) => URL.revokeObjectURL(f.url));
    };
    // we intentionally don't include files in deps to avoid revoking early
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // previews shown only inside dashed box; no large preview panel

  const onOpenForm = () => {
    if (!files.length) return; // guard
    setShowForm(true);
  };

  const onCloseForm = () => {
    setShowForm(false);
    setFormError("");
  };

  const onChangeField = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    setFormError("");
    // simple validation
    if (!form.name || !form.address || !form.phone || !form.email) {
      setFormError("All fields are required.");
      return;
    }
    // basic email/phone pattern check (lightweight)
    const emailOk = /.+@.+\..+/.test(form.email);
    const phoneOk = /[0-9+()\- ]{6,}/.test(form.phone);
    if (!emailOk) return setFormError("Enter a valid email.");
    if (!phoneOk) return setFormError("Enter a valid phone number.");
    if (!files.length) {
      setFormError("Please upload at least one prescription file.");
      return;
    }
    setSubmitting(true);
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("address", form.address);
    formData.append("phone", form.phone);
    formData.append("email", form.email);
    files.forEach((f) => {
      formData.append("prescriptions", f.file, f.file.name);
    });
    try {
      const res = await fetch(
        "https://remedius-backend.onrender.com/upload-prescription",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed");
      onCloseForm();
      setFiles([]);
      setSelectedIdx(null);
      alert(
        "Prescription submitted successfully! You will receive a confirmation email."
      );
    } catch (err) {
      setFormError(err.message || "Failed to submit – please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
          <h1 className="text-lg font-semibold tracking-wide text-gray-800">
            UPLOAD PRESCRIPTIONS
          </h1>

          <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-12">
            {/* LEFT: Upload panel */}
            <section className="xl:col-span-3">
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <p className="text-sm text-gray-700">
                  Choose from the following to upload prescription:
                </p>

                <div className="mt-4 space-y-3">
                  <button
                    onClick={onChooseFromGallery}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0e6178] px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#0c5265] focus:outline-none focus:ring-2 focus:ring-[#0e6178]"
                  >
                    <GalleryIcon className="h-5 w-5" />
                    CHOOSE FROM GALLERY
                  </button>
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*,.pdf"
                  multiple
                  className="hidden"
                  onChange={onFilesSelected}
                />

                <div className="mt-6">
                  <div className="rounded-lg border-2 border-dashed border-gray-200 p-4 text-center">
                    {files.length === 0 ? (
                      <div className="space-y-1">
                        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                          <UploadIcon className="h-5 w-5 text-gray-500" />
                        </div>
                        <p className="text-sm text-gray-600">
                          Uploaded Prescriptions will be shown here
                        </p>
                      </div>
                    ) : (
                      <div className="text-left">
                        {selectedIdx != null && files[selectedIdx] && (
                          <div className="mb-4 overflow-hidden rounded-lg border border-[#0e6178]/30 bg-white p-3">
                            <LargeInBoxPreview fileItem={files[selectedIdx]} />
                            <div className="mt-2 flex items-center justify-between">
                              <p
                                className="truncate text-xs font-medium text-gray-700"
                                title={files[selectedIdx].file.name}
                              >
                                {files[selectedIdx].file.name}
                              </p>
                              <span className="text-[10px] text-gray-500">
                                {(
                                  files[selectedIdx].file.size /
                                  (1024 * 1024)
                                ).toFixed(2)}{" "}
                                MB
                              </span>
                            </div>
                            <div className="mt-3">
                              <button
                                type="button"
                                onClick={onOpenForm}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#0e6178] px-3 py-2 text-sm font-semibold text-white shadow hover:bg-[#0c5265] disabled:cursor-not-allowed disabled:opacity-50"
                              >
                                <UploadIcon className="h-4 w-4" />
                                Upload Prescription
                              </button>
                            </div>
                          </div>
                        )}
                        <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                          {files.map((f, i) => (
                            <li
                              key={`${f.file.name}-${i}`}
                              className={`group relative cursor-pointer rounded-md border p-1 shadow-sm transition ${
                                i === selectedIdx
                                  ? "border-[#0e6178] ring-2 ring-[#0e6178]/40"
                                  : "border-gray-200 hover:border-[#0e6178]"
                              }`}
                              onClick={() => setSelectedIdx(i)}
                            >
                              <div className="h-20 w-full overflow-hidden rounded bg-gray-50">
                                <FileThumbOnly fileItem={f} />
                              </div>
                              <button
                                className="absolute right-1 top-1 rounded bg-white/80 p-1 text-gray-500 shadow hover:bg-white"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  removeFile(i);
                                }}
                                aria-label="Remove file"
                              >
                                <CloseIcon className="h-3 w-3" />
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {error && (
                    <p className="mt-3 text-xs font-medium text-red-600">
                      {error}
                    </p>
                  )}
                </div>
              </div>
            </section>

            {/* MIDDLE: Checklist */}
            <section className="xl:col-span-5">
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-medium text-gray-800">
                  Make sure the prescription you upload contains the following
                  elements:
                </p>

                <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
                  <ChecklistItem
                    icon={<DoctorIcon className="h-7 w-7" />}
                    title="Doctor"
                    subtitle="Details"
                  />
                  <ChecklistItem
                    icon={<CalendarIcon className="h-7 w-7" />}
                    title="Date of"
                    subtitle="Prescription"
                  />
                  <ChecklistItem
                    icon={<PatientIcon className="h-7 w-7" />}
                    title="Patient"
                    subtitle="Details"
                  />
                  <ChecklistItem
                    icon={<PillsIcon className="h-7 w-7" />}
                    title="Medicine"
                    subtitle="Details"
                  />
                  <ChecklistItem
                    icon={<SizeIcon className="h-7 w-7" />}
                    title={`${MAX_MB} MB`}
                    subtitle="Maximum File Size"
                  />
                </div>

                <div className="mt-6 flex items-start gap-3">
                  <WarningIcon className="mt-0.5 h-5 w-5 text-amber-500" />
                  <p className="text-sm text-gray-600">
                    Our pharmacist will dispense medicines only if the
                    prescription is valid &amp; meets all government
                    regulations.
                  </p>
                </div>
              </div>

              <p className="mt-3 text-xs text-gray-500">
                *As Per Govt. Regulations We Dispense Full Strips of Medicines
              </p>
            </section>

            {/* RIGHT: Sample Prescription (static redesigned) */}
            <section className="xl:col-span-4">
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-medium text-gray-800">
                  Guide for a valid prescription
                </p>
                <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-5">
                  <div className="mx-auto w-full max-w-md rounded-md border border-gray-300 bg-white p-4 text-[11px] leading-tight text-gray-700 shadow-sm">
                    {/* Top doctor + clinic details */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-[10px] font-medium text-gray-500">
                          Name of the doctor:
                        </p>
                        <div className="h-2 w-40 border-b border-gray-300"></div>
                        <p className="mt-2 text-[10px] font-medium text-gray-500">
                          Name of the hospital/clinic:
                        </p>
                        <div className="h-2 w-56 border-b border-gray-300"></div>
                        <p className="mt-2 text-[10px] font-medium text-gray-500">
                          Address of the hospital/clinic:
                        </p>
                        <div className="h-2 w-64 border-b border-gray-300"></div>
                        <p className="mt-2 text-[10px] font-medium text-gray-500">
                          Regd no:
                        </p>
                        <div className="h-2 w-32 border-b border-gray-300"></div>
                      </div>
                    </div>
                    {/* Patient details */}
                    <div className="mt-5 space-y-2">
                      <div className="flex flex-wrap gap-6 text-[10px]">
                        <span className="min-w-[140px] font-medium text-gray-500">
                          Name of the patient:
                        </span>
                        <div className="flex-1 border-b border-gray-300"></div>
                        <span className="font-medium text-gray-500">
                          Age/Sex:
                        </span>
                        <div className="w-20 border-b border-gray-300"></div>
                      </div>
                      <div className="flex flex-wrap gap-6 text-[10px]">
                        <span className="min-w-[70px] font-medium text-gray-500">
                          Address:
                        </span>
                        <div className="flex-1 border-b border-gray-300"></div>
                        <span className="font-medium text-gray-500">Date:</span>
                        <div className="w-28 border-b border-gray-300"></div>
                      </div>
                    </div>
                    {/* Drug Prescription table */}
                    <div className="mt-5">
                      <p className="text-[11px] font-semibold text-gray-700">
                        Drug Prescription
                      </p>
                      <div className="mt-2 overflow-hidden rounded border border-gray-300">
                        <table className="w-full table-fixed border-collapse text-[10px]">
                          <thead className="bg-gray-100 text-gray-600">
                            <tr>
                              <th className="w-1/3 border-b border-gray-300 px-2 py-1 text-left font-medium">
                                Medicine Name
                              </th>
                              <th className="w-1/6 border-b border-gray-300 px-2 py-1 text-left font-medium">
                                Strength
                              </th>
                              <th className="w-1/6 border-b border-gray-300 px-2 py-1 text-left font-medium">
                                Dose
                              </th>
                              <th className="w-1/6 border-b border-gray-300 px-2 py-1 text-left font-medium">
                                Duration
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="odd:bg-white even:bg-gray-50">
                              <td className="border-b border-gray-200 px-2 py-1">
                                Bokjorin
                              </td>
                              <td className="border-b border-gray-200 px-2 py-1">
                                500mg
                              </td>
                              <td className="border-b border-gray-200 px-2 py-1">
                                1-0-1
                              </td>
                              <td className="border-b border-gray-200 px-2 py-1">
                                6 months
                              </td>
                            </tr>
                            <tr className="odd:bg-white even:bg-gray-50">
                              <td className="border-b border-gray-200 px-2 py-1">
                                Pycomosa
                              </td>
                              <td className="border-b border-gray-200 px-2 py-1">
                                50mg
                              </td>
                              <td className="border-b border-gray-200 px-2 py-1">
                                1-0-0
                              </td>
                              <td className="border-b border-gray-200 px-2 py-1">
                                3 months
                              </td>
                            </tr>
                            <tr>
                              <td
                                className="px-2 py-2 text-gray-300"
                                colSpan={4}
                              >
                                ...
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/* Signature row */}
                    <div className="mt-8 flex items-end justify-end">
                      <div className="text-center">
                        <div className="h-10 w-28 rounded border border-dashed border-gray-300 bg-gray-50"></div>
                        <p className="mt-1 text-[10px] text-gray-500">
                          Doctor&apos;s sign and stamp
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Caption */}
                  <div className="mt-6 text-center">
                    <p className="text-xs font-semibold text-gray-800">
                      Doctor&apos;s signature and stamp
                    </p>
                    <p className="mt-1 px-4 text-[11px] text-gray-600">
                      The prescription with Signature and/or stamp of the doctor
                      to be considered valid
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      {showForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-8"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
            <div className="flex items-start justify-between">
              <h2 className="text-base font-semibold text-gray-800">
                Enter Your Details
              </h2>
              <button
                onClick={onCloseForm}
                className="rounded p-1 text-gray-500 hover:bg-gray-100"
                aria-label="Close form"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={onSubmitForm} className="mt-4 space-y-4">
              <div>
                <label className="mb-1 block text-xs font-medium text-gray-600">
                  Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChangeField}
                  className="w-full rounded-md border text-gray-900 border-gray-300 px-3 py-2 text-sm focus:border-[#0e6178] focus:outline-none focus:ring-1 focus:ring-[#0e6178]"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-gray-600">
                  Address
                </label>
                <textarea
                  name="address"
                  value={form.address}
                  onChange={onChangeField}
                  className="w-full min-h-[70px] resize-y text-gray-900 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#0e6178] focus:outline-none focus:ring-1 focus:ring-[#0e6178]"
                  placeholder="Delivery address"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-gray-600">
                  Phone
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={onChangeField}
                  className="w-full rounded-md border text-gray-900 border-gray-300 px-3 py-2 text-sm focus:border-[#0e6178] focus:outline-none focus:ring-1 focus:ring-[#0e6178]"
                  placeholder="e.g. +123 456 7890"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChangeField}
                  className="w-full rounded-md border text-gray-900 border-gray-300 px-3 py-2 text-sm focus:border-[#0e6178] focus:outline-none focus:ring-1 focus:ring-[#0e6178]"
                  placeholder="you@example.com"
                  required
                />
              </div>
              {formError && (
                <p className="text-xs font-medium text-red-600">{formError}</p>
              )}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onCloseForm}
                  className="rounded-md px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 rounded-md bg-[#0e6178] px-5 py-2 text-sm font-semibold text-white shadow hover:bg-[#0c5265] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting && (
                    <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                  )}
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

/* ---------- small UI helpers ---------- */

function ChecklistItem({ icon, title, subtitle }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-xl bg-[#0e6178]/5 p-4 ring-1 ring-[#0e6178]/15">
      <div className="grid h-14 w-14 place-items-center rounded-full bg-white ring-1 ring-[#0e6178]/25">
        <div className="text-[#0e6178]">{icon}</div>
      </div>
      <div className="text-center leading-tight">
        <p className="text-sm font-semibold text-gray-800">{title}</p>
        <p className="text-xs text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
}

function FileBadge({ filename }) {
  const ext = filename.split(".").pop()?.toUpperCase() || "";
  return (
    <div className="grid h-9 w-9 place-items-center rounded-md bg-[#0e6178]/10 text-[10px] font-bold text-[#0e6178] ring-1 ring-[#0e6178]/25">
      {ext}
    </div>
  );
}

function FilePreviewThumb({ fileItem }) {
  const { file, url } = fileItem;
  const isImage = file.type.startsWith("image/");
  const isPDF =
    file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");
  if (isImage)
    return (
      <div className="h-9 w-9 overflow-hidden rounded-md ring-1 ring-[#0e6178]/25">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={url}
          alt={file.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    );
  if (isPDF)
    return (
      <div className="grid h-9 w-9 place-items-center rounded-md bg-red-50 text-[10px] font-bold text-red-600 ring-1 ring-red-200">
        PDF
      </div>
    );
  return <FileBadge filename={file.name} />;
}

// Simpler thumb for grid (larger square)
function FileThumbOnly({ fileItem }) {
  const { file, url } = fileItem;
  const isImage = file.type.startsWith("image/");
  const isPDF =
    file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");
  if (isImage)
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={url}
        alt={file.name}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    );
  if (isPDF)
    return (
      <div className="flex h-full w-full items-center justify-center bg-red-50 text-xs font-bold text-red-600">
        PDF
      </div>
    );
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#0e6178]/5 text-[11px] font-bold text-[#0e6178]">
      {file.name.split(".").pop()?.toUpperCase()}
    </div>
  );
}

// Large preview component (inside dashed box)
function LargeInBoxPreview({ fileItem }) {
  const { file, url } = fileItem;
  const isImage = file.type.startsWith("image/");
  const isPDF =
    file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");
  if (isImage)
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={url}
        alt={file.name}
        className="mx-auto max-h-72 w-auto max-w-full rounded object-contain"
      />
    );
  if (isPDF)
    return (
      <div className="mx-auto h-72 w-full overflow-hidden rounded bg-gray-100">
        <iframe title={file.name} src={url} className="h-full w-full" />
      </div>
    );
  return (
    <div className="flex h-72 items-center justify-center rounded bg-[#0e6178]/5">
      <p className="text-sm font-medium text-[#0e6178]">
        {file.name.split(".").pop()?.toUpperCase()} file
      </p>
    </div>
  );
}

/* ---------- icons (inline SVGs) ---------- */

const GalleryIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" />
    <circle cx="9" cy="9" r="2" stroke="currentColor" />
    <path
      d="M21 15l-5-5-5 6-2-2-4 5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RxIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" />
    <path d="M8 8h6M8 12h6" stroke="currentColor" strokeLinecap="round" />
    <path d="M10 16l4-4m0 4l-4-4" stroke="currentColor" />
    <text x="6" y="9" fontSize="6" className="fill-current">
      R
    </text>
    <text x="12" y="9" fontSize="6" className="fill-current">
      x
    </text>
  </svg>
);

const UploadIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 16V8m0 0l-3 3m3-3l3 3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 16v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);

const DoctorIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="7" r="3" stroke="currentColor" />
    <path
      d="M5 19a7 7 0 0114 0v1H5v-1z"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path d="M12 12v3m-1.5-1.5h3" stroke="currentColor" strokeLinecap="round" />
  </svg>
);

const CalendarIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" />
    <path d="M3 9h18" stroke="currentColor" />
    <path d="M8 3v4M16 3v4" stroke="currentColor" strokeLinecap="round" />
  </svg>
);

const PatientIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="7" r="3" stroke="currentColor" />
    <path
      d="M4 20a8 8 0 0116 0v0"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);

const PillsIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect
      x="3"
      y="12"
      width="10"
      height="8"
      rx="4"
      stroke="currentColor"
    ></rect>
    <rect
      x="11"
      y="4"
      width="10"
      height="8"
      rx="4"
      stroke="currentColor"
    ></rect>
    <path d="M8 16h0" stroke="currentColor" strokeLinecap="round" />
  </svg>
);

const SizeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" />
    <path d="M8 16l8-8" stroke="currentColor" />
    <path d="M8 8h4M12 8v4" stroke="currentColor" strokeLinecap="round" />
  </svg>
);

const WarningIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M10.3 3.9L1.9 18a2 2 0 001.7 3h16.8a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z"
      stroke="currentColor"
    />
    <path d="M12 9v4" stroke="currentColor" strokeLinecap="round" />
    <circle cx="12" cy="17" r="1" fill="currentColor" />
  </svg>
);

const CloseIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M6 6l12 12M18 6L6 18"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);

const ArrowRight = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M5 12h14m0 0l-5-5m5 5l-5 5"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
