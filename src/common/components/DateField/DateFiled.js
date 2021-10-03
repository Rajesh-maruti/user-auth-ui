import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import moment from "moment";

const DateField = ({
  day_label = "DD",
  day_variant = "standard",
  day_classes = "w-full",
  containerClass = "py-2 w-full",
  day_value,
  day_error,
  day_touched,
  day_name,
  month_label = "MM",
  month_variant = "standard",
  month_classes = "w-full",
  month_value,
  month_error,
  month_touched,
  month_name,
  year_label = "YYYY",
  year_variant = "standard",
  year_classes = "w-full",
  year_value,
  year_error,
  year_touched,
  year_name,
  max_year = parseInt(moment().year()),
  base_year = parseInt(moment().year()) - 90,
  handleChange,
  handleBlur,
}) => {
  const months = moment.monthsShort();
  const [daysInMonth, setDaysInMOnth] = useState([]);
  const [yearList, setYearList] = useState(
    new Array(max_year - base_year).fill(0)
  );

  const handleDays = () => {
    if (!month_value || !year_value) return setDaysInMOnth([]);
    let month_index = months.indexOf(month_value);
    setDaysInMOnth(
      new Array(
        moment(`${year_value}-${month_index + 1}`, "YYYY-MM").daysInMonth()
      ).fill(0)
    );
    return;
  };

  let error_msg_year = year_error && year_touched ? year_error : null;
  let error_msg_month = month_error && month_touched ? month_error : null;
  let error_msg_day = day_error && day_touched ? day_error : null;
  useEffect(() => {
    handleDays();
  }, [month_value, year_value]);
  return (
    <div className={`grid w-full grid-cols-3 gap-1 ${containerClass}`}>
      <div className="w-full">
        <FormControl variant={year_variant} className={year_classes}>
          <InputLabel>{year_label}</InputLabel>
          <Select
            name={year_name}
            value={year_value}
            onChange={handleChange}
            label={year_label}
            error={year_error && year_touched}
            onBlur={handleBlur}
          >
            {yearList?.map((each, index) => (
              <MenuItem key={index} value={max_year - index}>
                {max_year - index}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className="w-full">
        <FormControl variant={month_variant} className={month_classes}>
          <InputLabel>{month_label}</InputLabel>
          <Select
            name={month_name}
            value={month_value}
            onChange={handleChange}
            label={month_label}
            error={month_error && month_touched}
            onBlur={handleBlur}
          >
            {months?.map((each, index) => (
              <MenuItem key={index} value={each}>
                {each}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className="w-full">
        <FormControl variant={day_variant} className={day_classes}>
          <InputLabel>{day_label}</InputLabel>
          <Select
            name={day_name}
            value={day_value}
            onChange={handleChange}
            label={day_label}
            onBlur={handleBlur}
            error={day_error && day_touched}
          >
            {daysInMonth.map((each, index) => (
              <MenuItem value={index + 1}>{index + 1}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <p className="text-xs mt-1 text-red-500 font-roboto mb-1 h-5">
        {error_msg_year || error_msg_month || error_msg_day}
      </p>
    </div>
  );
};

export default DateField;
