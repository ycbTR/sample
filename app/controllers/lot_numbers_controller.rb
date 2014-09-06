class LotNumbersController < ApplicationController
  # GET /lot_numbers
  # GET /lot_numbers.json
  def index
    @lot_numbers = LotNumber.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @lot_numbers }
    end
  end

  # GET /lot_numbers/1
  # GET /lot_numbers/1.json
  def show
    @lot_number = LotNumber.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @lot_number }
    end
  end

  # GET /lot_numbers/new
  # GET /lot_numbers/new.json
  def new
    @lot_number = LotNumber.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @lot_number }
    end
  end

  # GET /lot_numbers/1/edit
  def edit
    @lot_number = LotNumber.find(params[:id])
  end

  # POST /lot_numbers
  # POST /lot_numbers.json
  def create
    @lot_number = LotNumber.new(params[:lot_number])

    respond_to do |format|
      if @lot_number.save
        format.html { redirect_to @lot_number, notice: 'Lot number was successfully created.' }
        format.json { render json: @lot_number, status: :created, location: @lot_number }
      else
        format.html { render action: "new" }
        format.json { render json: @lot_number.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /lot_numbers/1
  # PUT /lot_numbers/1.json
  def update
    @lot_number = LotNumber.find(params[:id])

    respond_to do |format|
      if @lot_number.update_attributes(params[:lot_number])
        format.html { redirect_to @lot_number, notice: 'Lot number was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @lot_number.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /lot_numbers/1
  # DELETE /lot_numbers/1.json
  def destroy
    @lot_number = LotNumber.find(params[:id])
    @lot_number.destroy

    respond_to do |format|
      format.html { redirect_to lot_numbers_url }
      format.json { head :no_content }
    end
  end
end
