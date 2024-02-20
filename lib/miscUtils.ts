export const handleDownload = () => {
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
