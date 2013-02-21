;(function ($, window, undefined) {
  'use strict';

  var $doc = $(document),
      Modernizr = window.Modernizr;

  $(document).ready(function() {
    $.fn.foundationButtons          ? $doc.foundationButtons() : null;
    $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
    $.fn.foundationTopBar           ? $doc.foundationTopBar() : null;
    $.fn.foundationCustomForms      ? $doc.foundationCustomForms() : null;
    $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
    $.fn.foundationTabs             ? $doc.foundationTabs({callback : $.foundation.customForms.appendCustomMarkup}) : null;
    $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;
    $.fn.foundationMagellan         ? $doc.foundationMagellan() : null;
    $.fn.foundationClearing         ? $doc.foundationClearing() : null;

    $.fn.placeholder                ? $('input, textarea').placeholder() : null;
  });

  // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
  // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
  // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
  // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
  // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

  // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
  if (Modernizr.touch && !window.location.hash) {
    $(window).load(function () {
      setTimeout(function () {
        // At load, if user hasn't scrolled more than 20px or so...
  			if( $(window).scrollTop() < 20 ) {
          window.scrollTo(0, 1);
        }
      }, 0);
    });
  }

})(jQuery, this);


  var data = {   
    experience: [
      {
        "position": "UX Developer",
        "company": "Converse Asia Pacific",
        "startDate": "September 2012",
        "endDate": "December 2012",
        "description": "Responsible for User Experience development for Converse.com.cn. Managed feature improvements and performance optimization. Taught Chinese web development team to write semantic, best-practice, and current build process through Grunt. Increased the website's speed by >60% through front-end optimizations (image sprites, file concatenation, CDN and server optimizations)."
      },
      {
        "position": "Front-end developer",
        "company": "iTalki",
        "startDate": "August 2012",
        "endDate": "December 2012",
        "description": "Prototyped and coded marketing pages using scalable modular CSS. Produced screencasts, iPhone application promotional video, and website tours using Adobe Premiere and Reflections. Taught existing frontend developer how to write CSS and JS through object-oriented patterns. Improved marketing product production time from over 1 week to less than 1 day."
      },
      {
        "position": "Web Developer",
        "company": "Infinite Twist",
        "startDate": "July 2012",
        "endDate": "December 2012",
        "description": "Used the Foundation front-end framework from Zurb to prototype the website. Using prototype, translated the website into a e-commerce WordPress theme. Final product allows company to have international shipping zones for global clientele."
      },
      {
        "position": "E-commerce Wordpress Developer",
        "company": "Flying Turtle Coffee",
        "startDate": "June 2012",
        "endDate": "December 2012",
        "description": "Developed a responsive multilingual e-commerce WordPress child-theme using WooCommerce. Contributed modular segments from the site to the WooCommerce open-source community."
      },
      {
        "position": "Web Developer",
        "company": "Wealthy Sources",
        "startDate": "August 2012",
        "endDate": "November 2012",
        "description": "Produced WealthySources.com based on GoogleVentures.com website. Established email collection systems with Mailchimp and site analytic collection with Google Analytics. Trained in-house Wealthy Sources staff on WordPress management."
      },
      {
        "position": "Email Marketing and Graphic Designer",
        "company": 'Kenas Furniture "member of the Li & Fung Group"',
        "startDate": "March 2012",
        "endDate": "August 2012",
        "description": "Hand coded email newsletters using table based layouts. Improved companies branding through email contact through custom 'Kenas' styled layouts. Implemented a email deployment schedule which maximized delivery times based on recipient's timezone. Increased first-day click through rates from <7% to >16%."
      }
    ]
  },
  {
    skills: [
      {
        "skill": "HTML5",
        "colorContext": "success",
        "relevance": [
          "Syntax", "Canvas", "Microdata", "Browser Limits", "Spriting"
        ],
        "width": "twelve"
      },
      {
        "skill": "CSS3",
        "colorContext": "success",
        "relevance": [
          "Pre-processors", "SMACSS / OOCSS", "Responsive"
        ],
        "width": "twelve"
      },
      {
        "skill": "Javascript",
        "colorContext": "primary",
        "relevance": [
          "Modernizer", "jQuery", "Templating Frameworks"
        ],
        "width": "twelve"
      },
      {
        "skill": "Backend",
        "colorContext": "secondary",
        "relevance": [
          "PHP",
          "Ruby",
        ],
        "width": "six",
        "column": "column",
        "rowIn": "true"
      },
      {
        "skill": "Other",
        "colorContext": "secondary",
        "relevance": [
          "Git", "CLI"
        ],
        "width": "six",
        "column": "column",
        "rowOut": "true"
      },
      {
        "skill": "Design",
        "colorContext": "success",
        "relevance": [
          "Photoshop", "Illustrator", "InDesign"
        ],
        "width": "twelve"
      }
    ]
  };

  var template = {
    experience: function(){ 
    '{{#experience}} <div class="experience-item">' + 
    '<h3 class="title inline">{{position}}</h3> <h3 class="company subheader inline">{{company}}</h3>' + 
    '<h4 class="dates">{{startDate}} - {{endDate}}</h4>' + 
    '<p>{{description}}</p> </div> {{/experience}}'; 
    },
    skills: function() {
    '<ul class="">' +
    '{{#skills}} {{#rowIn}}<div class="row">{{/rowIn}} <li class=" no-list-style {{width}} {{column}} {{skill}}"><h3>{{skill}}</h3>' +
    '<div class="radius progress   {{colorContext}}"><span class="meter"></span></div>' +
    '<ul class="inline-list">' +
    '{{#relevance}}<li>{{.}}</li>{{/relevance}}' +
    '</ul></li> {{#rowOut}}</div>{{/rowOut}}</ul>{{/skills}}';
    }
  };

  jQuery(function () {
    template.experience();
    template.skills();
  });

  var views = {

  }
  var viewExperience = Mustache.to_html(experienceTemplate, data); 
  $('#experienceArea').html(viewExperience);

  var viewSkills = Mustache.to_html(skillsTemplate, data); 
  $('#skillsArea').html(viewSkills);


