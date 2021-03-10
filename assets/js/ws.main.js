window.onload = function() {

  /* CALL FUNCTION TO BEGIN TESTIMONIALS ROTATION */
  ws.cycleTestimonials();
  
}

const ws = {

  /* BEGIN TESTIMONIAL ROTATION FUNCTIONS */

    cycleTestimonials: function() {
      let testimonials = document.querySelectorAll('.testimonial');
      let testimonialCount = 1;
      setInterval(function(){
        let currentTestimonial = ws.selectTestimonial(testimonialCount);
        if (testimonialCount === testimonials.length) {
          testimonialCount = 1;
        }
        else {
          testimonialCount++;
        }
        // hide currently displayed testimonial
        currentTestimonial.classList.add('hide');
        currentTestimonial.classList.remove('show');
        // show next testimonial
        let nextTestimonial = ws.selectTestimonial(testimonialCount);
        nextTestimonial.classList.add('show');
        nextTestimonial.classList.remove('hide');

      }, 7500);
    },

    selectTestimonial: function(num) {
      return document.querySelector('.t' + num);
    }

  /* END TESTIMONIAL ROTATION FUNCTIONS */
}