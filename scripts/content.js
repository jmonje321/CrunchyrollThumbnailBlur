const thumbnails = document.getElementsByClassName("content-image__image--7tGlg");
// Class name of images = content-image__image--7tGlg
// Thumbnails have attribute data-t="card-image"

let observer = new MutationObserver((mutations) => {blurThumbnails()});
  
observer.observe(document.body, {
  characterDataOldValue: true, 
  subtree: true, 
  childList: true, 
  characterData: true
});

function blurThumbnails()
{
  for (let idx = 0; idx < thumbnails.length; idx++)
  {
    if (thumbnails[idx].hasAttribute("data-t") && thumbnails[idx].getAttribute("data-t") == "card-image")
    {
      if (!thumbnails[idx].hasAttribute("style"))
      {
        thumbnails[idx].style.filter = "blur(5px)";
      }
    }
  }
}