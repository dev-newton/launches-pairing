import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Launch from '../app/_components/Launch';
import { LaunchData } from '../app/_types';

const launchData: LaunchData = {
  id: '5eb87cdaffd86e000604b32b',
  success: false,
  failures: [{ reason: 'bad engine' }],
  cores: [{ core: {id:'22', serial:"Merlin1A"} }],
  payloads: [{id:"22", name:"FalconSAT-2", type:"Satellite"}],
  name: 'Launch ABC',
  date_utc: '2006-03-24T22:30:00.000Z',
  links: {
    patch: {
      small: 'https://images2.imgbox.com/94/f2/NN6Ph45r_o.png',
    },
  },
};

describe('Launch', () => {
  it('renders a Launch component with valid data', async () => {
    render(await Launch({ launch: launchData }));

    expect(screen.queryByText('Launch ABC')).toBeInTheDocument();
    expect(screen.queryByText('24/3/2006')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.queryByText('Merlin1A')).toBeInTheDocument();
    expect(screen.queryByText('FalconSAT-2')).toBeInTheDocument();
    expect(screen.queryByText('Satellite')).toBeInTheDocument();
  });

  it('displays failed, bad engine, and reason for failure text when status is false', async () => {

    launchData.success = false;

    render(await Launch({ launch: launchData }));

    expect(screen.queryByText('bad engine')).toBeInTheDocument();
    expect(screen.queryByText('Reason for failure:')).toBeInTheDocument();
    expect(screen.queryByText('failed')).toBeInTheDocument();
  });

  it('displays successful text when status is true', async () => {

    launchData.success = true;

    render(await Launch({ launch: launchData }));

    expect(screen.queryByText('successful')).toBeInTheDocument();
    expect(screen.queryByText('failed')).not.toBeInTheDocument();
    expect(screen.queryByText('Reason for failure:')).not.toBeInTheDocument();
    expect(screen.queryByText('bad engine')).not.toBeInTheDocument();
  });

  it('displays N/A text when core serial, payload name, and payload type are undefined', async () => {

    launchData.cores[0].core.serial = undefined;
    launchData.payloads[0].name = undefined;
    launchData.payloads[0].type = undefined;

    render(await Launch({ launch: launchData }));

    expect(screen.queryByText('Serial ABC')).not.toBeInTheDocument();
    expect(screen.queryByText('FalconSAT-1')).not.toBeInTheDocument();
    expect(screen.queryByText('Satellite ABC')).not.toBeInTheDocument();
  });
});
