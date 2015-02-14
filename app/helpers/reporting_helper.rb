module ReportingHelper


  def add_heritages(lot_number, is_master = true)
    (@processed_lot_numbers ||= [])
    @processed_lot_numbers = [] if is_master
    return "" if @processed_lot_numbers.include?(lot_number.id)
    @processed_lot_numbers << lot_number.id
    rtr_string = ""
    lot_number.heritages.map do |heritage|
      deposit = heritage.deposits.active.last
      next if deposit.blank?
      rtr_string += <<HTML
       <tr>
          <td></td>
          <td></td>
          <td> #{deposit.plant.species rescue ''} </td>
          <td> #{deposit.display rescue ""} </td>
          <td> #{heritage.region rescue ""} </td>
          <td> #{heritage.provenance rescue ""} </td>
          <td> #{heritage.location rescue ""} </td>
       </tr>
        #{add_heritages(heritage, false)}
HTML
    end
    rtr_string.html_safe
  end

  def add_heritages_xls(lot_number, is_master = true)
    (@processed_lot_numbers_xls ||= [])
    @processed_lot_numbers_xls = [] if is_master
    return "" if @processed_lot_numbers_xls.include?(lot_number.id)
    @processed_lot_numbers_xls << lot_number.id
    rtr_string = ""
    lot_number.heritages.map do |heritage|
      deposit = heritage.deposits.active.last
      next if deposit.blank?
      rtr_string += <<HTML
          <Row>
          <Cell><Data ss:Type="String"></Data></Cell>
          <Cell><Data ss:Type="String"></Data></Cell>
          <Cell><Data ss:Type="String"> #{deposit.plant.species rescue ''} </Data></Cell>
          <Cell><Data ss:Type="String"> #{deposit.display rescue ""} </Data></Cell>
          <Cell><Data ss:Type="String"> #{heritage.region rescue ""}</Data></Cell>
          <Cell><Data ss:Type="String"> #{heritage.provenance rescue ""}</Data></Cell>
          <Cell><Data ss:Type="String"> #{heritage.location rescue ""} </Data></Cell>
          </Row>
        #{add_heritages_xls(heritage, false)}
HTML
    end
    rtr_string.html_safe
  end


end