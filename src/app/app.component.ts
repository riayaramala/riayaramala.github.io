import { Component, ViewChild, ElementRef } from '@angular/core';
import { Project } from './models/project';
import { Education } from './models/education';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  projects: Project[] = [{
    clientName: "Uline",
    duration: "Feb 2017 to present",
    description: `Uline is a shipping supply company which has active operations in US, Canada, and
    Mexico. As part of the G2 modernization project, they are migrating all of thier legacy systems
    into new microservices and responsive web applications using latest technologies like Angular, 
    Spring boot, Hibernate. I have been working for Uline for past two years on one of the key project, Quotes.
    My daily duties include working with business team to groom stories, sorting out technical approaches, working with 
    UX designers to get mock ups for the screens and active coding both in front-end and back-end.`
  }, {
    clientName: "Wellsfargo",
    duration: "Jan 2016 to Jan 2017",
    description: `Wells Fargo Mortgage is a giant web application which processes mortgage 
    applications across the U.S. I have worked on multiple projects during my tenure at Wells Fargo 
    which are mainly focussed on adding additional features to the existing mortgage application. 
    I have worked on IITS project which was to pull the customer bank account information to the 
    mortgage application which needed a lot of integration effort with the external services. 
    `
  },
  {
    clientName: "Oklahoma Christian University",
    duration: "Aug 2014 to Dec 2015",
    description: `During my Masters at OCU, I was given an opportunity to work with the internal 
    application team; I was mainly helping web application team in fixing bugs that were found in 
    the university's web site, also worked on some of the enhancements that were requested by the 
    users/admin department. During this time, I was working with HTML, Jquery, CSS, and Java.
    `
  },

  {
    clientName: "All Tech Media",
    duration: "Jan 2014 to July 2014",
    description: `All Tech Media is an IT consulting firm which helps clients in all pahses of the
    application development. During my perios at All Tech Media, I was part of a development team in building
    responsive web applications using variety of front-end technologies and creating Rest services using using Java and Spring framework`
  }]


  // educationDetails
  educationDetails: Education[] = [
    {
      collegeName: 'Oklahoma Christian University',
      duration: 'July 2014 to Dec 2015',
      degreeName: 'Master of Science in Engineering',
      description: 'Completed masters with 3.5 GPA'
    }
  ];

  // skills
  skills: string[] = ['React', 'Angular', 'Javascript', 'HTML5', 'CSS3', 'Redux', 'Jasmine', 'Pug', 'SCSS', 'Typescript', 'DOM', 'CSSOM',
    'Protractor', 'Karma', 'ngRx', 'Java', 'Spring', 'Spring boot', 'Hibernate', 'Junit', 'Microservices', 'Rest API'];

  @ViewChild('canvas') canvasElm: ElementRef;
  AfterViewInit() {
    var canvas = this.canvasElm.nativeElement as HTMLCanvasElement;
    var c = canvas.getContext('2d');

    canvas.width = document.body.scrollWidth;
    canvas.height = document.body.scrollHeight;

    var mouse = {
      x: canvas.width,
      y: canvas.height
    }

    window.addEventListener("resize", function () {
      canvas.width = document.body.scrollWidth;
      canvas.height = document.body.scrollHeight;
    });

    window.addEventListener("mousemove", function (e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    var colors = [
      { r: 255, g: 71, b: 71 },
      { r: 0, g: 206, b: 237 },
      { r: 255, g: 255, b: 255 }
    ];

    function Particle(x, y, dx, dy, r, ttl) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.r = r;
      this.opacity = 1;
      this.shouldRemove = false;
      this.timeToLive = ttl;
      this.randomColor = Math.floor(Math.random() * colors.length);


      this.update = function () {
        this.x += this.dx
        this.y += this.dy

        if (this.x + this.r >= canvas.width || this.x - this.r <= 0)
          this.dx = -this.dx

        if (this.y + this.r >= canvas.height || this.y - this.r <= 0)
          this.dy = -this.dy

        // Ensure that particles cannot be spawned past canvas boundaries
        this.x = Math.min(Math.max(this.x, 0 + this.r), canvas.width - this.r)
        this.y = Math.min(Math.max(this.y, 0 + this.r), canvas.height - this.r)

        c.beginPath()
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false)
        c.strokeStyle =
          'rgba(' +
          colors[this.randomColor].r +
          ',' +
          colors[this.randomColor].g +
          ',' +
          colors[this.randomColor].b +
          ',' +
          this.opacity +
          ')'
        c.fillStyle =
          'rgba(' +
          colors[this.randomColor].r +
          ',' +
          colors[this.randomColor].g +
          ',' +
          colors[this.randomColor].b +
          ',' +
          this.opacity +
          ')'
        c.stroke()
        c.closePath()

        this.opacity -= 1 / (ttl / 0.1)
        this.r -= r / (ttl / 0.1)

        if (this.r < 0) this.r = 0 // Thank you Akash for the conditional!

        this.timeToLive -= 0.1
      }


      this.remove = function () {
        // If timeToLive expires, return a true value.
        // This signifies that the particle should be removed from the scene.
        return this.timeToLive <= 0;
      }
    }

    function Explosion(x, y) {
      this.particles = [];

      this.init = function () {
        for (var i = 1; i <= 1; i++) {
          var randomVelocity = {
            x: (Math.random() - 0.5) * 3.5,
            y: (Math.random() - 0.5) * 3.5,
          }
          this.particles.push(new Particle(x, y, randomVelocity.x, randomVelocity.y, 30, 8));
        }
      }

      this.init();

      this.draw = function () {
        for (var i = 0; i < this.particles.length; i++) {
          this.particles[i].update();

          if (this.particles[i].remove() == true) {
            this.particles.splice(i, 1);
          };
        }
      }
    }

    var explosions = [];

    function animate() {
      window.requestAnimationFrame(animate);

      c.fillStyle = "#FFFFFF";
      c.fillRect(0, 0, canvas.width, canvas.height);

      explosions.push(new Explosion(mouse.x, mouse.y));

      for (var i = 0; i < explosions.length; i++) {
        explosions[i].draw();
      }
    }
    animate();
  }
}
