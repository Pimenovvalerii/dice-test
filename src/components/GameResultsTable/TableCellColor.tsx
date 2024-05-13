import { TableCell } from "@mui/material";
import { styled } from "@mui/material/styles";

interface TableCellColorProps {
  isSuccess: boolean;
}

export const TableCellColor = styled(TableCell)<TableCellColorProps>(({ theme, isSuccess }) => ({
  color: isSuccess ? theme.palette.customRedColor : theme.palette.customGreenColor
}));
