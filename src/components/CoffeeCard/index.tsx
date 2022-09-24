import { CoffeeCardContainer, CoffeeInfo, CoffeeLabels } from './styles';

interface CoffeeCardProps {
  name: string;
  description: string;
  src: string;
  labels: string[];
}

export function CoffeeCard({
  name,
  description,
  src,
  labels,
}: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <img src={src} alt='Imagem do café' />

      <CoffeeLabels>
        {labels.map((label) => (
          <span>{label}</span>
        ))}
      </CoffeeLabels>

      <CoffeeInfo>
        <span>{name}</span>
        <small>{description}</small>
      </CoffeeInfo>
    </CoffeeCardContainer>
  );
}
