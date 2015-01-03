class SeedLotNumbers < ActiveRecord::Migration
  def up

    Plant.delete_all
    LotNumber.delete_all
    Deposit.delete_all
    LotHeritage.delete_all
    Order.delete_all
    LineItem.delete_all
    DepositAdjustment.delete_all
    OrderForm.delete_all
    OrderFormItem.delete_all


    spreadsheet = Roo::Excelx.new("#{Rails.root}/lib/imports/catalog_to_generate_lotnumbers.xlsx")
    header = spreadsheet.row(16)
    # => {"Lot No"=>"8462/14", "Botanical Name"=>"Acacia acinacae", "Common Name"=>"Gold-dust Wattle", "Region"=>"EN", "Provenance"=>"Tahbilk ", "Qty"=>2765.0, "$/kg"=>372.0}

    dummy_heritage = LotNumber.new
    dummy_heritage.number = "999999"
    dummy_heritage.provenance = "Dummy"
    dummy_heritage.region = "Dummy"
    dummy_heritage.save

    (17..spreadsheet.last_row).each do |i|
      row = Hash[[header, spreadsheet.row(i)].transpose]

      p = Plant.where(:species => row['Botanical Name']).first
      if p.blank?
        p = Plant.new
        p.species = row['Botanical Name']
        p.common_name = row['Common Name']
      end
      p.price_paid = spreadsheet.row(i)[6].to_f / 1.92
      p.level_1_price = spreadsheet.row(i)[6].to_f
      p.level_2_price = spreadsheet.row(i)[7].to_f
      p.level_3_price = spreadsheet.row(i)[8].to_f
      p.save


      ln = LotNumber.new
      ln.number = row['Lot No'].split('/').first
      ln.provenance = row['Provenance'].to_s
      ln.region = row['Region']
      if ln.provenance.to_s.include?('SPA')
        ln.heritage_ids = dummy_heritage.id
      end
      ln.save

      d = Deposit.new
      d.lot_number = ln
      d.plant = p
      d.collector = Person::Collector.first
      d.qty_bank = row['Qty']
      d.date = "20#{row['Lot No'].split('/').last.strip}-01-01"
      d.save

    end


  end

  def down
  end
end
