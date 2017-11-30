import {Component} from "react";
import {SkiDayCount} from "./SkiDayCount";
import {SkiDayList} from "./SkiDayList";
import {AddDayForm} from "./AddDayForm";
import {Menu} from "./Menu";

export class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            allSkiDays: [
                {
                    resort: "Squaw Valley",
                    date: "2016-01-02",
                    powder: true,
                    backcountry: false
                }
            ]
        };
        this.addDay = this.addDay.bind(this);
    }

    countDays(filter) {
        const {allSkiDays} = this.state;

        return allSkiDays.filter((day) =>{
            return (filter) ? day[filter] : day
        }).length;
    }

    addDay(newDay) {
        this.setState({
            allSkiDays: [
                ...this.state.allSkiDays,
                newDay
            ]
        });
    }

    render(){
       return (
           <div className="app">
               <Menu/>
               {
                   // Root route
                   (this.props.location.pathname === '/') ?
                       <SkiDayCount total={this.countDays()}
                                    powder={this.countDays("powder")}
                                    backcountry={this.countDays("backcountry")}/> :

                   // Add-Day route / else
                   (this.props.location.pathname === "/add-day") ?
                       <AddDayForm onNewDay={this.addDay}/> :
                       <SkiDayList days={this.state.allSkiDays}
                                   filter={this.props.params.filter}/>
               }
           </div>
       )
    }
}