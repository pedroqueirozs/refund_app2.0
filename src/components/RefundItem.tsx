export type RefundTypeProps = {
  id: string;
  name: string;
  category: string;
  amount: string;
  categoryImg: string;
};

type Props = React.ComponentProps<"a"> & {
  data: RefundTypeProps;
};

export function RefundItem({ data, ...rest }: Props) {
  return (
    <a
      className="flex items-center gap-3 hover:bg-green-100/5 cursor-pointer rounded-md p-2"
      {...rest}
    >
      <img
        className="h-8 w-8"
        src={data.categoryImg}
        alt="icone da categoria"
      />
      <div className="flex flex-col flex-1">
        <strong className="text-sm text-gray-100">{data.name}</strong>
        <span className="text-xs text-gray-200">{data.category}</span>
      </div>

      <span className="text-sm text-gray-100 font-semibold">
        <small className="font-normal text-gray-200">R$</small>
        {data.amount}
      </span>
    </a>
  );
}
