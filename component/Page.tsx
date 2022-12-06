import { Box } from '@chakra-ui/react';
import Navbar from './Nav';

type Props = {
  children: JSX.Element;
};

const Page = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      <Box pt={'14'}>{children}</Box>
    </div>
  );
};

export default Page;
