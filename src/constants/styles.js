// @flow

const styles: Object = {
  appContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  dialogBox: {
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    backgroundColor: '#cccccc',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 165,
  },
  dialogContent: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#dd2200',
    color: '#ffffff',
    padding: 10,
    border: 'none',
    outline: 'none',
    borderRadius: 5,
    width: '100%',
    ':disabled': {
      opacity: 0.3,
    },
  },
  mainFont: {
    fontSize: 15,
    fontFamily: 'sans-serif',
  },
  buttonFont: {
    fontSize: 10,
  },
};

export default styles;
