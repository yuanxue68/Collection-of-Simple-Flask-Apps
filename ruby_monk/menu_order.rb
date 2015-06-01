#A restaurant has incoming orders for which you need to compute the costs based on the menu.
class Restaurant
  def initialize(menu)
    @menu = menu
  end

  def cost(*orders)
    orders.inject(0) do |sum,order|
      sum+order.keys.inject(0) do |orderSum, key|
        orderSum+order[key]*@menu[key]
      end
    end
  end
end
