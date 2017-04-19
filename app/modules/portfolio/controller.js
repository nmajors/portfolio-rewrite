class PortfolioController {
    constructor() {
        this.events = document.querySelectorAll(".entry");
        this.triggerOffset = 0.9;

        this.scrollEventListeners();
        this.showBlocks();
        this.hoverEventListeners();
      }

      offset(el) {
        let rect = el.getBoundingClientRect(), bodyEl = document.body;
        return {
          top: rect.top + bodyEl.scrollTop,
          left: rect.left + bodyEl.scrollLeft
        };
      }

      scrollEventListeners() {
        window.addEventListener("scroll", (e) => {
          if (!window.requestAnimationFrame) {
            setTimeout(() => {
              this.showBlocks();
            }, 100);
          }
          else {
            window.requestAnimationFrame(() => {
              this.showBlocks();
            });
          }
        });
      }

    hoverEventListeners(){
      document.querySelector(".about--item").addEventListener('mouseover', (evn) => {
        let pic = document.querySelector(".nancyPhoto");
        if (evn.target.classList.contains("surprise")){
         document.body.style.cursor = "pointer";
         pic.style.backgroundImage = "url('./assets/images/zoolander-slashie-award.jpg')";
         pic.style.backgroundSize = "auto";
         pic.style.border = "1px solid #fff";
        }
      })
      document.querySelector(".about--item").addEventListener('mouseout', (ev) => {
        let pic = document.querySelector(".nancyPhoto");
        if (ev.target.classList.contains("surprise")){
         document.body.style.cursor = "default";
         pic.style.backgroundImage = "url('./assets/images/nancy.png')";
               pic.style.backgroundSize = "cover";
               pic.style.border = "1px solid black";
        }
      });
    }
    	showBlocks(blocks, offset) {
        Array.from(this.events).forEach((event) => {
          if (this.offset(event).top <= (document.body.scrollTop + window.innerHeight * this.triggerOffset)) {
            let img = event.querySelector(".entry--img");
            let content = event.querySelector(".entry--content");

            if (img.classList.contains("is-hidden")) {
              img.classList.remove("is-hidden");
              img.classList.add("bounce-in");
              content.classList.remove("is-hidden");
              content.classList.add("bounce-in");
            }
          }
        });
    	}
}

export default PortfolioController;
