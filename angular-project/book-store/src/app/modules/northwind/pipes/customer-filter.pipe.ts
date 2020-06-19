import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';

@Pipe({
  name: 'customerFilter'
})
export class CustomerFilterPipe implements PipeTransform {

  transform(customerList: Customer[], value: string ): unknown {
    if (customerList && customerList.length) {
      if (value && value.length > 2) {
        return customerList.filter(item => {
          return item.companyName.includes(value);
        });
      }
      return customerList;
    }
    return null;
  }

}
