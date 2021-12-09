const API_BASE_URL = 'https://www.algoexpert.io/api/testimonials';
const TESTIMONIAL_COUNT = 5;
const testimonialContainer =document.getElementById("testimonial-container");
let after = null;
let canFetchTestimonials = true;

const handleScroll = () => {
  if(!canFetchTestimonials) return;
  const bottomSpace = (this.scrollHeight- this.scrollTop-this.clientHeight);
  if(bottomSpace > 0) return;
  getTestimonials();
}

const getTestimonials = () => {
  canFetchTestimonials = false;
  const url = createUrl();
  fetch(url)
      .then(res  => res.json())
      .then(({testimonials,hasNext}) =>{
        const fragment = document.createDocumentFragment();
        testimonials.forEach(({message})=> {
          fragment.appendChild(createTestimonialElement(message));
        });
        testimonialContainer.appendChild(fragment);
        if(hasNext){
          after =  testimonials[testimonials.length-1].id;
        }
        else {
          testimonialContainer.removeEventListener("scroll",handleScroll);
        }
        canFetchTestimonials = true;
      })
      .catch(err =>console.error(err));
}

const createUrl = () => {
  return (after !== null) ? `${API_BASE_URL}?limit=5&after=${after}`
                          : `${API_BASE_URL}?limit=5`

} ;

const createTestimonialElement = (message) => {
  const p = document.createElement("p");
  p.textContent = message;
  p.classList.add("testimonial");
  return p;
}

testimonialContainer.addEventListener("scroll",handleScroll);
getTestimonials();