import { Address } from "../interfaces/Interface";

interface InlineDocsTSProps {
  address: Address;
}

const InlineDocsTS = ({ address }: InlineDocsTSProps) => {
  return <div>Esta es la Dirección:{address.street}</div>;
};

export default InlineDocsTS;
