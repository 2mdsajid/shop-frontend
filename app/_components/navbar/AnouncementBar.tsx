export function AnnouncementBar({ content }: { content?: string }) {
  if (!content) return null
  return (
    <div className="w-full sticky top-0 z-50 bg-brand-secondary py-2 text-center text-sm text-brand-light">
      <p>{content}</p>
    </div>
  )
}

