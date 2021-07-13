import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRollComponent } from './chat-roll.component';

describe('ChatRollComponent', () => {
  let component: ChatRollComponent;
  let fixture: ComponentFixture<ChatRollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatRollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
