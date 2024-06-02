document.addEventListener('DOMContentLoaded', function () {
    const tour = new Shepherd.Tour({
      useModalOverlay: true,
      defaultStepOptions: {
        scrollTo: { behavior: 'smooth', block: 'center' }
      }
    });
  
    tour.addStep({
      id: 'logo-step',
      text: 'Hey! Welcome to RecyKool. Let\'s take a tour of our website.',
      attachTo: {
      },
      buttons: [
        {
          text: 'Start',
          action: tour.next
        },{
            text:'No, Thanks!',
            action:function(){
                tour.cancel();
            }
        }
      ]
    });
  
    tour.addStep({
      id: 'aboutus-step',
      text: 'Let\'s get started by knowing more about us.',
      attachTo: {
        element: '.section-title',
        on: 'top'
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back
        },
        {
          text: 'Next',
          action: tour.next
        },{
            text:'Exit',
            action:function(){
                tour.cancel();
            }
        }
      ],
      classes: 'custom-class',
      popperOptions: {
        modifiers: [{ name: 'offset', options: { offset: [0, 8] } }]
      }
    });
    tour.addStep({
        id: 'whyus-step',
        text: 'Now, let\'s know why you should choose us.',
        attachTo: {
          element: '.featured-services .section-title',
          on: 'top'
        },
        buttons: [
          {
            text: 'Back',
            action: tour.back
          },
          {
            text: 'Next',
            action: tour.next
          },{
              text:'Exit',
              action:function(){
                  tour.cancel();
              }
          }
        ],
        classes: 'custom-class',
        popperOptions: {
          modifiers: [{ name: 'offset', options: { offset: [0, 8] } }]
        }
      });

      tour.addStep({
        id: 'cities-step',
        text: 'We are currently serving in these cities.',
        attachTo: {
          element: '.services .section-title',
          on: 'top'
        },
        buttons: [
          {
            text: 'Back',
            action: tour.back
          },
          {
            text: 'Next',
            action: tour.next
          },{
              text:'Exit',
              action:function(){
                  tour.cancel();
              }
          }
        ],
        classes: 'custom-class',
        popperOptions: {
          modifiers: [{ name: 'offset', options: { offset: [0, 8] } }]
        }
      });
      tour.addStep({
        id: 'articles-step',
        text: 'Read our latest articles.',
        attachTo: {
          element: '.portfolio .section-title',
          on: 'top'
        },
        buttons: [
          {
            text: 'Back',
            action: tour.back
          },
          {
            text: 'Next',
            action: tour.next
          },{
              text:'Exit',
              action:function(){
                  tour.cancel();
              }
          }
        ],
        classes: 'custom-class',
        popperOptions: {
          modifiers: [{ name: 'offset', options: { offset: [0, 8] } }]
        }
      });
      tour.addStep({
        id: 'testimonials-step',
        text: 'What our customers say about us.',
        attachTo: {
          element: '.testimonials .section-title',
          on: 'top'
        },
        buttons: [
          {
            text: 'Back',
            action: tour.back
          },
          {
            text: 'Next',
            action: tour.next
          },{
              text:'Exit',
              action:function(){
                  tour.cancel();
              }
          }
        ],
        classes: 'custom-class',
        popperOptions: {
          modifiers: [{ name: 'offset', options: { offset: [0, 8] } }]
        }
      });
      tour.addStep({
        id: 'schedule-pickup-step',
        text: 'Schedule a pickup now.',
        attachTo: {
          element: '.cta .text-center',
          on: 'top'
        },
        buttons: [
          {
            text: 'Back',
            action: tour.back
          },
          {
            text: 'Next',
            action: tour.next
          },{
              text:'Exit',
              action:function(){
                  tour.cancel();
              }
          }
        ],
        classes: 'custom-class',
        popperOptions: {
          modifiers: [{ name: 'offset', options: { offset: [0, 8] } }]
        }
      });
      tour.addStep({
        id: 'contact-step',
        text: 'Contact us for more information.',
        attachTo: {
          element: '.contact .section-title',
          on: 'top'
        },
        buttons: [
          {
            text: 'Back',
            action: tour.back
          },{
              text:'Exit',
              action:function(){
                  tour.cancel();
              }
          }
        ],
        classes: 'custom-class',
        popperOptions: {
          modifiers: [{ name: 'offset', options: { offset: [0, 8] } }]
        }
      });
  
  
    tour.start();
  });
  