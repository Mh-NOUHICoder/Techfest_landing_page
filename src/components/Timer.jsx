import React , {Component} from 'react'

class Timer extends Component {
  constructor(props){
    super(props);
    this.state =  {
        time: 0 ,
        running: false,
        intervalId: null
    };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer  = this.stopTimer.bind(this);
  }
    startTimer()  {
        if(!this.state.running) {
            const intervalId = 
            setInterval(() => {
                this.setState({
                    time:this.state.time + 1
                })
            },1000);
            
        }
   }
   

    stopTimer() {
        if (this.state.running) {
            clearInterval(this.state.intervalId);
            this.setState({running:false});
        }
    }



   render(){
    return(
        <>
        <div className='flex flex-row place-items-center justify-center font-bold text-white'>
            <h1 className='py-8 font-extrabold text-gray-500 '>
                Timer {this.state.time} seconds
            </h1>
            <div>
                
                <div className='p-10 m-10 space-x-8'>
                <button className='bg-black w-full rounded-lg'>Reset</button>
                
                <button onClick={
                    this.timer.running ? this.stopTimer : this.startTimer
                } className='bg-black w-full rounded-lg'>{this.state.running ? 'Stop' : 'Start'}</button>
                </div>
            </div>
        
        </div>
        </>
    )
   }
}

export default Timer
