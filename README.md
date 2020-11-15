# BigDatepickerBoardModule 
>__used in angular project__

angular datepicker board,just big,flatten all tweleve months

# Install
>__npm install big-datepicker-board__

## Usage
_(stackblitz example)_

---------------------------------------------------------------------------------------
[Click to Demo Project](https://stackblitz.com/edit/big-datepicker-board?file=src%2Fapp%2F_modules%2Fbig-datepicker-board%2Fbig-datepicker-board%2Futil.ts)  

---------------------------------------------------------------------------------------

## USEAGE SCREENSHOOTS

###  app.module.ts

    import {BigDatepickerBoardModule} from "big-datepicker-board";
    @NgModule({
      imports: [
        ...
        BigDatepickerBoardModule.forRoot(),
        ....
      ],
      ....
    })
    export class AppModule {}    


### in your page
    

    //html
    <big-datepicker-board
      [year]="year"                          //year, default is current year
      [cell_width]="calendar_cell_width"     //month-view width, default "800"
      [lang] ="lang"                         //language "en" or "es"
      [slcted]="slcted"                      // a array for slcted date,default []
                                             // the ele of array listed at below
                                             // <the slcted element format as below>
      [disable]="calendar_disable"           // disable selection,default false
    >
    </big-datepicker-board>    
 
### view
         
![](https://raw.githubusercontent.com/navegador5/nv-angular-big-datepicker-board/master/Images/all.png) 

### slcted 
         
![](https://raw.githubusercontent.com/navegador5/nv-angular-big-datepicker-board/master/Images/slcted.png) 


### the slcted element format as below

    {
      y: 2020,
      m: 1,
      d: 1,
      h: 0,
      min: 0,
      s: 0,
      ms: 0,
      ts: 1577808000,
      mts: 1577808000000,
      z: '+0800',
      zone: '+0800',
      tzname: '+0800',
      soffset: 28800,
      msoffset: 28800000,
      yq: 1,
      yw: 1,
      yd: 1,
      qm: 1,
      qw: 1,
      qd: 1,
      mt: 1,
      mw: 1,
      td: 1,
      wd: 3,
      local_str: '2020-01-01 00:00:00 +0800'
    } 
    
    const sjsnoz = require("jsnoz").sjsnoz
    var dt = new Date()
    var d = sjsnoz.dt2local_dict(dt)
    d.local_str = sjsnoz.dt2local_str(dt)

 
## GIT

- https://github.com/navegador5/nv-angular-big-datepicker-board.git


