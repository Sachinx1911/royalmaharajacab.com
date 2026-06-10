import type { ReactElement, SVGProps } from "react";
import {
  BoltIcon,
  CarIcon,
  ClockIcon,
  DoorIcon,
  MountainIcon,
  PinIcon,
  PlaneIcon,
  RouteIcon,
  RupeeIcon,
  ShieldIcon,
  SparkleIcon,
} from "./Icons";

const map: Record<string, (p: SVGProps<SVGSVGElement>) => ReactElement> = {
  rupee: RupeeIcon,
  door: DoorIcon,
  car: CarIcon,
  clock: ClockIcon,
  sparkle: SparkleIcon,
  shield: ShieldIcon,
  bolt: BoltIcon,
  plane: PlaneIcon,
  route: RouteIcon,
  mountain: MountainIcon,
  pin: PinIcon,
};

export default function IconByName({
  name,
  ...props
}: { name: string } & SVGProps<SVGSVGElement>) {
  const Cmp = map[name] ?? CarIcon;
  return <Cmp {...props} />;
}
