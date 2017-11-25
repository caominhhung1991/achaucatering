import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'
import 'rxjs/add/operator/toPromise';

// declare variable jquery and $ to use jquery plugin
declare var jquery: any;
declare var $: any;

@Injectable()
export class AppService {
  result: any;
  tuyendungs: any = [
    {
      id: 1,
      chucdanh: 'Quản lý',
      bophan: 'Quản lý',
      diadiem: 'Bình Dương, Đồng Nai',
      ngayhethan: '',
      mota: {
        bangcap: "Tốt nghiệp Trung cấp, Cao Đẳng - Đại học ngành công nghệ thực phẩm, Kỹ thuật nữ công hoặc quản trị nhà hàng khách sạn.",
        kinhnghiem: "Có 1 năm kinh nghiệm làm vị trí quản lý trở lên, ưu tiên ứng viên có kinh nghiệm trong lĩnh vực suất ăn công nghiệp.",
        kynang: [
          "Có kỹ năng tổ chức lãnh đạo, quản lý nhân viên, giao tiếp tốt với khách hàng.",
          "Nhanh nhẹn, trung thực, nhiệt tình.",
          "Có kiến thức về vệ sinh an toàn thực phẩm, biết cách lập thực đơn, oder, báo cáo chi phí.",
          "Đối với Quản lý làm việc tại khu vực Đồng Nai ưu tiên người địa phương."
        ]
      }
    },
    {
      id: 2,
      chucdanh: 'Đầu bếp',
      bophan: 'Nhà bếp',
      diadiem: 'Tp.HCM',
      ngayhethan: '',
      mota: {
        bangcap: "Có chứng chỉ nấu ăn.",
        kinhnghiem: "Có ít nhất 03 năm trong ngành suất ăn công nghiệp",
        kynang: [
          "Biết chế biến các món ăn phù hợp khẩu vị theo vùng miền.",
          "Có khả năng lên thực đơn, nấu các món nước như: bún, phở, bánh canh….",
          "Nhanh nhẹn, chăm chỉ, chấp nhận sự điều động của công ty."
        ]
      }
    },
    {
      id: 3,
      chucdanh: 'Phụ bếp',
      bophan: 'Nhà bếp',
      diadiem: 'Biên Hòa, Đồng Nai',
      ngayhethan: '',
      mota: {
        bangcap: "Không yêu cầu",
        kinhnghiem: "Không yêu cầu",
        kynang: [
          "Có khả năng nấu ăn.",
          "Có sức khỏe, chăm chỉ, nhiệt tình."
        ]
      }
    },
    {
      id: 4,
      chucdanh: 'Lao động phổ thông',
      bophan: 'Quầy phục vụ',
      diadiem: 'Biên Hòa, Đồng Nai',
      ngayhethan: '',
      mota: {
        bangcap: "Không yêu cầu",
        kinhnghiem: "Không yêu cầu",
        kynang: [
          "Khỏe mạnh, nhanh nhẹn, chăm chỉ.",
          "Đối với khu vực đồng nai ưu tiên người địa phương"
        ]
      }
    }
    
  ];

  getTuyenDungs() {
    return this.tuyendungs;
  }

  getTuyenDung(id: any) {
    let tuyendung = this.tuyendungs.find(td => td.id == id);
    return tuyendung;
  } 

  gotoTop(number) {
    // $(window).scrollTop(number, number);
    window.scrollTo(number, number);
    console.log("gotoTop")
  }
}
