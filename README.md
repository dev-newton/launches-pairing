# FE test.

## Running and Testing the app

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### System Requirements

#### Browser
- Google Chrome

### How to run
- Clone the repository
- Run `npm install` from the project root directory to install dependencies.
- Create a `.env` file in the project root directory and add the following:
`NEXT_API_ENDPOINT=https://api.spacexdata.com/v5/launches/query`
- Run `npm run dev` from the project root directory to run the app locally.
- You can find the project running locally on `http://localhost:3000`

### Testing
- Run `npm test` from the project root directory to run tests.

### Possible Improvements given more time
- Write cypress tests for End-to-end testing
- Break the `Launch` component down into smaller components for reusability
- Handle errors more descriptively rather than just show a general `Something went wrong` message.

### Screenshots
- Filled state
<img width="1440" alt="image" src="https://github.com/dev-newton/launches-pairing/assets/43371892/9b3c35f9-fafe-49f7-8081-3ddabd532320">

- Loading skeleton state
<img width="1440" alt="image" src="https://github.com/dev-newton/launches-pairing/assets/43371892/80f7b1fc-ff72-40da-874c-4feb97a39085">

- Error state
<img width="1440" alt="image" src="https://github.com/dev-newton/launches-pairing/assets/43371892/09bae80f-6f2c-44da-ada8-d4b745a8d830">

- Test Coverage
<img width="556" alt="image" src="https://github.com/dev-newton/launches-pairing/assets/43371892/85d72b11-ea34-4b22-9103-8106c77b10c1">


