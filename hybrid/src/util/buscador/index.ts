import { CarpoolData } from "src/app/interfaces/carpool-data";


function jaccardSimilarity(a: string, b: string): number {
  const setA = new Set(a.toLowerCase().split(' '));
  const setB = new Set(b.toLowerCase().split(' '));

  const intersection = new Set([...setA].filter(x => setB.has(x)));
  const union = new Set([...setA, ...setB]);

  return intersection.size / union.size;
}

export function buscarPorDestinos(destino: string, carpools: CarpoolData[]): CarpoolData[] {
  return carpools.filter(carpool => 
      carpool.destiny.some(dest => jaccardSimilarity(dest, destino) > 0.5)
  );
}