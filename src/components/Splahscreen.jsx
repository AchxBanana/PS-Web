import React, { Component } from 'react';
import { TypeAnimation } from 'react-type-animation';

function SplashMessage() {
  return (
    <>
      <div className="flex bg-slate-900 justify-center text-5xl font-bold text-white">
        <TypeAnimation
          sequence={[
            'Welcome to Potisarn Pittayakorn',
          ]}
        />
      </div>
    </>
    
  );
}

export default function withSplashScreen(WrappedComponent) {
  return class extends Component {
    constructor(props){
      super(props);
      this.state = {
        loading: true,
      };
    }

    async componentDidMount(){
      try {
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 2000)
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false,
        });
      }
    }
    render() {
      if(this.state.loading) return SplashMessage();

      return <WrappedComponent {...this.props} />;
    }
  };
}
