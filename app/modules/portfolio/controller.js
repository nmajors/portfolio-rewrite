class PortfolioController {
    constructor() {
        this.events = document.querySelectorAll(".entry");
        this.triggerOffset = 0.9;
        this.hoverEls = document.querySelectorAll(".surprise");

        this.eventListeners();
        // this.rainbow();
        this.showBlocks();
        this.hoverSurprise();
      }

      offset(el) {
        let rect = el.getBoundingClientRect(), bodyEl = document.body;

        return {
          top: rect.top + bodyEl.scrollTop,
          left: rect.left + bodyEl.scrollLeft
        };
      }

      eventListeners() {

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

      hoverSurprise(){
        Array.from(this.hoverEls).forEach((hoverEl)=>{
          let pic = document.querySelector(".nancyPhoto");
          hoverEl.addEventListener("mouseenter", (ev) =>{
            console.log("hi");
            document.body.style.cursor = "pointer";
            pic.style.backgroundImage = "url('https://blobtoblog.files.wordpress.com/2011/05/zoolander-slashie-award.jpg')";
          })
          hoverEl.addEventListener("mouseleave", (evn) =>{
            console.log("bye");
            document.body.style.cursor = "default";
            pic.style.backgroundImage = "url('./assets/images/nancy.png')";
          });
          hoverEl.addEventListener("onClick")
        });
        // let hover = document.querySelector(".surprise");
        // let pic = document.querySelector(".nancyPhoto");

      }

    }


export default PortfolioController;


// class entry {
//   constructor() {
//     this.events = document.querySelectorAll(".entry");
//     this.triggerOffset = 0.9;
//
//     this.eventListeners();
//     // this.rainbow();
//     this.showBlocks();
//   }
//
//   offset(el) {
//     let rect = el.getBoundingClientRect(), bodyEl = document.body;
//
//     return {
//       top: rect.top + bodyEl.scrollTop,
//       left: rect.left + bodyEl.scrollLeft
//     };
//   }
//
//   eventListeners() {
//
//     window.addEventListener("scroll", (e) => {
//       if (!window.requestAnimationFrame) {
//         setTimeout(() => {
//           this.showBlocks();
//         }, 100);
//       }
//       else {
//         window.requestAnimationFrame(() => {
//           this.showBlocks();
//         });
//       }
//     });
//
//   }
//
// 	showBlocks(blocks, offset) {
//
//     Array.from(this.events).forEach((event) => {
//       if (this.offset(event).top <= (document.body.scrollTop + window.innerHeight * this.triggerOffset)) {
//         let img = event.querySelector(".entry--img");
//         let content = event.querySelector(".entry--content");
//
//         if (img.classList.contains("is-hidden")) {
//           img.classList.remove("is-hidden");
//           img.classList.add("bounce-in");
//           content.classList.remove("is-hidden");
//           content.classList.add("bounce-in");
//         }
//
//       }
//     });
//
// 	}
  //
  // rainbow() {
  //   let rainbow = new Rainbow();
  //   rainbow.setNumberRange(0, this.events.length - 1);
  //   rainbow.setSpectrum("#3498DB", "#BDC3C7");
  //
  //   for (var i = 0; i < this.events.length; i++) {
  //     this.events[i].querySelector(".entry--img").style.backgroundColor = "#" + rainbow.colourAt(i);
  //
  //     let tags = this.events[i].querySelectorAll(".tags li");
  //
  //     Array.from(tags).forEach((tag) => {
  //       tag.style.backgroundColor = "#" + rainbow.colourAt(i);
  //     });
  //
  //   }
  // }
// }
//
// export default entry;
