'use client'

export default function Resume() {
  const resume = [
    {
      company: 'MeritFirst',
      title: 'Founding Software Engineer',
      start: '2025',
      end: 'Present',
    },
    {
      company: 'Concentro',
      title: 'Founding Software Engineer',
      start: '2024',
      end: '2025',
    },
    {
      company: 'Gladiate',
      title: 'Founding Software Engineer',
      start: '2022',
      end: '2024',
    },
    {
      company: 'Kearney',
      title: 'Software Engineer',
      start: '2021',
      end: '2022',
    },
    {
      company: 'Dogsilly',
      title: 'Software Engineer',
      start: '2020',
      end: '2021',
    },
  ]

  const handleDownload = () => {
    fetch('/brett_schneider_resume.pdf').then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob)
        const alink = document.createElement('a')
        alink.href = fileURL
        alink.download = "Brett Schneider's Resume.pdf"
        alink.click()
      })
    })
  }

  return (
    <div className="space-y-4">
      <div className="flex items-baseline justify-between">
        <h2 className="text-foreground text-sm font-medium">Work</h2>
        <button
          onClick={handleDownload}
          className="text-muted-foreground hover:text-foreground text-xs transition-colors"
        >
          Resume &darr;
        </button>
      </div>
      <ol className="space-y-3">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <span className="text-foreground text-sm font-medium">
                {role.company}
              </span>
              <span className="text-muted-foreground text-sm tabular-nums">
                {role.start} &mdash; {role.end}
              </span>
            </div>
            <span className="text-muted-foreground text-sm">{role.title}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}
